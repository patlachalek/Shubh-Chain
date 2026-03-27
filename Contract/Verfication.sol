// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Verification {
    address public owner;
    uint256 public count_Exporters = 0; 
    uint256 public count_hashes = 0;

    struct Record {
        uint blockNumber; 
        uint minetime; 
        string collegeName; 
        string studentName; 
        string studentEmail; 
        string ipfs_hash;
    }

    struct Exporter_Record {
        uint blockNumber;
        string info; 
    }

    mapping (bytes32 => Record) private docHashes;
    mapping (address => Exporter_Record) public Exporters; 

    // --- EVENTS ---
    event addHash(address indexed _exporter, bytes32 indexed _hash, string _ipfsHash, string _studentName, string _studentEmail, uint256 _timestamp);
    event deleteHashEvent(address indexed _exporter, bytes32 _hash, uint256 _timestamp);
    
    // Naye Events (Frontend sync ke liye best hain)
    event ExporterAdded(address indexed _exporter, string _info, uint256 _timestamp);
    event ExporterAltered(address indexed _exporter, string _newInfo, uint256 _timestamp);
    event ExporterDeleted(address indexed _exporter, uint256 _timestamp);

    constructor() { 
        owner = msg.sender; 
    }

    // --- MODIFIERS ---
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    modifier canAddHash() {
        require(Exporters[msg.sender].blockNumber != 0 || msg.sender == owner, "Caller not authorised");
        _;
    }

    // --- EXPORTER MANAGEMENT ---

    // 1. Add Exporter
    function add_Exporter(address _add, string calldata _info) external onlyOwner { 
        require(_add != address(0), "Invalid address");
        require(Exporters[_add].blockNumber == 0, "Exporter already exists");
        
        Exporters[_add].blockNumber = block.number;
        Exporters[_add].info = _info;
        count_Exporters++;
        
        emit ExporterAdded(_add, _info, block.timestamp);
    }

    // 2. Edit Exporter (Jo aapne manga tha 🚀)
    function alter_Exporter(address _add, string calldata _newInfo) external onlyOwner { 
        require(Exporters[_add].blockNumber != 0, "Exporter does not exist");
        
        Exporters[_add].info = _newInfo;
        
        emit ExporterAltered(_add, _newInfo, block.timestamp);
    }

    // 3. Delete Exporter
    function delete_Exporter(address _add) external onlyOwner {
        require(Exporters[_add].blockNumber != 0, "Exporter does not exist");
        
        Exporters[_add].blockNumber = 0;
        Exporters[_add].info = "";
        count_Exporters--;
        
        emit ExporterDeleted(_add, block.timestamp);
    }

    // --- DOCUMENT MANAGEMENT ---

    function addDocHash(
        bytes32 hash, 
        string calldata _ipfs, 
        string calldata _studentName, 
        string calldata _studentEmail
    ) public canAddHash {
        require(docHashes[hash].blockNumber == 0, "Document already exists");
        
        // Agar owner upload kar raha hai toh "Admin" dikhayenge, varna Exporter ka naam
        string memory _college = (msg.sender == owner) ? "Main Admin" : Exporters[msg.sender].info;

        docHashes[hash] = Record(
            block.number, 
            block.timestamp, 
            _college, 
            _studentName, 
            _studentEmail,
            _ipfs
        );
        count_hashes++;
        
        emit addHash(msg.sender, hash, _ipfs, _studentName, _studentEmail, block.timestamp);
    }

    function deleteDocHash(bytes32 _hash) external canAddHash {
        require(docHashes[_hash].blockNumber != 0, "Document does not exist");
        delete docHashes[_hash]; 
        count_hashes--;
        emit deleteHashEvent(msg.sender, _hash, block.timestamp);
    }

    // --- VIEW FUNCTIONS ---

    function findDocHash(bytes32 _hash) external view returns (uint, uint, string memory, string memory, string memory, string memory) {
        Record memory r = docHashes[_hash];
        return (r.blockNumber, r.minetime, r.collegeName, r.studentName, r.studentEmail, r.ipfs_hash);
    }

    function getExporterInfo(address _add) external view returns (string memory) {
        return (Exporters[_add].info);
    }

    function changeOwner(address _newOwner) public onlyOwner { 
        require(_newOwner != address(0), "Invalid address");
        owner = _newOwner; 
    }
}