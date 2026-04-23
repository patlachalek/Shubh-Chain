const PINATA_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlYzlmMDU0Yy03ZGJjLTQzNWUtOTRkNC00MDllNDhkNjkyZWMiLCJlbWFpbCI6InNodWJoYW1wYXRpbDk4NzY4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI3YmY4NjNiYWQ0MzU0OTI2NjQ5NSIsInNjb3BlZEtleVNlY3JldCI6IjM0MjgxNDA1OWE2M2U3ZDgxZjZkMDNmYmI0NjdlNDAwZDdhZjRiMjc2NThmOWQ2MmM1ZjhiOTY5NGM3NzBhM2YiLCJleHAiOjE4MDUyOTg1MjJ9.R66sTN4QyDS5azgmE2TE1EnEIjW6WHDQQr-aeGu1HQk"; 
window.CONTRACT = {
  address: "0x9365667Fe0dA16B2889818aAA6a54AEbda7F48d4", 
  network: "https://rpc.sepolia.org",
  explore: "https://sepolia.etherscan.io/address/",

  abi: [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_info",
				"type": "string"
			}
		],
		"name": "add_Exporter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hash",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "_ipfs",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_studentName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_studentEmail",
				"type": "string"
			}
		],
		"name": "addDocHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_newInfo",
				"type": "string"
			}
		],
		"name": "alter_Exporter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "delete_Exporter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_hash",
				"type": "bytes32"
			}
		],
		"name": "deleteDocHash",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_exporter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_info",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "ExporterAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_exporter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_newInfo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "ExporterAltered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_exporter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "ExporterDeleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_exporter",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "_hash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_ipfsHash",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_studentEmail",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "addHash",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_exporter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "_hash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_timestamp",
				"type": "uint256"
			}
		],
		"name": "deleteHashEvent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "count_Exporters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "count_hashes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "Exporters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "blockNumber",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "info",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_hash",
				"type": "bytes32"
			}
		],
		"name": "findDocHash",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "getExporterInfo",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
};
// 1. Check karo ki MetaMask installed hai ya nahi
async function connectWallet() {
    if (window.ethereum) {
        try {
            // 2. MetaMask se permission maango
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // 3. Chain ID check karo (Sepolia ki ID 11155111 hai, hex mein 0xaa36a7)
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
            
            if (chainId !== '0xaa36a7') {
                alert("Please switch to Sepolia Testnet in your MetaMask!");
                // Switch karne ka prompt bhej do
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0xaa36a7' }],
                });
            }
            
            console.log("Connected:", accounts[0]);
            // Yahan se tumhara contract interaction shuru hoga
        } catch (error) {
            console.error("Error connecting:", error);
            alert("Error: " + error.message);
        }
    } else {
        alert("MetaMask install karo bhai!");
    }
}
async function connect() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      window.userAddress = accounts[0].toLowerCase();
      window.localStorage.setItem("userAddress", window.userAddress);
      sessionStorage.setItem("userChoice", "connected");

     
      const ownerAddress = (await window.contract.methods.owner().call()).toLowerCase();
      const exporterData = await window.contract.methods.Exporters(window.userAddress).call();

     
      const isAuthorized = (window.userAddress === ownerAddress || exporterData.blockNumber != "0");

      if (isAuthorized) {
       
        Swal.fire({
          title: 'TERMINAL SYNC COMPLETE',
          html: `Identity Verified. Accessing ShubhChain Node... <br> <small style="color: #00f5ff;">Node ID: ${window.userAddress.substring(0, 6)}...${window.userAddress.substring(38)}</small>`,
          icon: 'success',
          background: '#020c12',
          color: '#fff',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          customClass: { popup: 'cyber-popup-border-cyan' }
        }).then(() => {
          window.location.href = "admin.html";
        });
      } else {
       
        Swal.fire({
          title: '<span style="color: #ff0055;">ACCESS_RESTRICTED</span>',
          html: `
            <div style="text-align: center; font-family: 'Exo 2';">
              <i class="fa-solid fa-shield-virus" style="font-size: 3rem; color: #ff0055; margin-bottom: 15px;"></i>
              <p>Cryptographic identity not recognized by ShubhChain Admin Protocol.</p>
              <code style="font-size: 0.7rem; color: #00f5ff; background: rgba(0,0,0,0.3); padding: 5px; border-radius: 4px;">ID: ${window.userAddress}</code>
              <p style="margin-top: 15px; font-size: 0.8rem; color: #8a9ab9;">Public access tools are currently offline.</p>
            </div>`,
          icon: 'error',
          background: '#020c12',
          color: '#fff',
          confirmButtonText: 'EXIT_TERMINAL',
          confirmButtonColor: '#ff0055',
          customClass: { popup: 'cyber-popup-border-red' }
        });

       
        sessionStorage.setItem("userChoice", "disconnected");
        window.localStorage.removeItem("userAddress");
      }

     
      await updateUIByRole();

    } catch (error) {
      console.error("Connection failed", error);
      Swal.fire({
        icon: 'error',
        title: 'PROTOCOL_ERROR',
        text: 'Security link rejected the connection request.',
        background: '#020c12',
        color: '#ff0055'
      });
    }
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'METAMASK MISSING',
      text: 'Install MetaMask to access the ShubhChain Terminal.',
      background: '#020c12',
      color: '#ff0055'
    });
  }
}
window.onload = async () => {
  
  if (window.location.href.indexOf("verify.html") > -1) {
    $("#loader").hide();
    $(".loader-wraper").fadeOut("slow");
    $("#upload_file_button").attr("disabled", true);
  }

  $("#loginButton").hide();
  $("#recent-header").hide();
  $(".loader-wraper").fadeOut("slow");
  hide_txInfo();
  $("#upload_file_button").attr("disabled", true);

  window.userAddress = window.localStorage.getItem("userAddress");

  if (window.ethereum) {
   
    window.web3 = new Web3(window.ethereum);
    window.contract = new window.web3.eth.Contract(
      window.CONTRACT.abi,
      window.CONTRACT.address
    );

   
    if (window.userAddress && window.userAddress.length > 10) {
      $("#logoutButton").show();
      $("#loginButton").hide();
      $("#userAddress").html(
        `<i class="fa-solid fa-address-card mx-2 text-primary"></i>${truncateAddress(window.userAddress)}
         <a class="text-info" href="${window.CONTRACT.explore}/address/${window.userAddress}" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-square-arrow-up-right text-warning"></i>
         </a>`
      );

      
      try {
        const accounts = await window.web3.eth.getAccounts();
        const currentUser = accounts[0];

        const adminAddress = await window.contract.methods.owner().call();
        const exporterData = await window.contract.methods.Exporters(currentUser).call();

        if (currentUser.toLowerCase() === adminAddress.toLowerCase()) {
          console.log("Welcome Admin!");
          $(".admin-only").show();
          $(".exporter-only").show();
        
          await window.updateDashboardStats(currentUser, true);
        } 
        else if (exporterData.blockNumber != "0") {
          console.log("Welcome Exporter!");
          $(".admin-only").hide();
          $(".exporter-only").show();
         
          await window.updateDashboardStats(currentUser, false);
        } 
        else {
          console.log("Unknown User Logged In");
          $(".admin-only, .exporter-only").hide();
        }
      } catch (e) { 
        console.log("Role detection error:", e); 
      }

      await getExporterInfo();
      await get_ChainID();
      await get_ethBalance();
      
      $("#Exporter-info").html(
        `<i class="fa-solid fa-building-columns mx-2 text-warning"></i>${window.info}`
      );

      if (window.location.href.indexOf("upload.html") > -1) {
        setTimeout(() => {
          listen(); 
        }, 0);
      }

    } else {
     
      $("#logoutButton").hide();
      $("#loginButton").show();
      $("#upload_file_button").attr("disabled", true);
      $("#doc-file").attr("disabled", true);
      $(".box").addClass("d-none");
      $(".loading-tx").addClass("d-none");
    }

    
    if (window.location.href.indexOf("verify.html") > -1) {
      const urlParams = new URLSearchParams(window.location.search);
      const hashFromURL = urlParams.get('hash');

      if (hashFromURL) {
        setTimeout(() => {
          verify_Hash(hashFromURL);
        }, 500);
      } else {
        checkURL();
      }
    }

  } else {
   
    $("#logoutButton").hide();
    $("#loginButton").hide();
    $(".box").addClass("d-none");
    $("#upload_file_button").attr("disabled", true);
    $("#doc-file").attr("disabled", true);
    if(document.querySelector(".alert")) document.querySelector(".alert").classList.remove("d-none");
  }
};

async function verify_Hash() {

  $("#loader").show();

  if (window.hashedfile) {
    await contract.methods
      .findDocHash(window.hashedfile)
      .call({ from: window.userAddress })
      .then((result) => {
        $(".transaction-status").removeClass("d-none");
        window.newHash = result;

        if ((result[0] != 0) && (result[1] != 0)) {
         
          print_verification_info(result, true);

          
          showSocialShare(window.hashedfile);
        } else {
         
          print_verification_info(result, false);

        
          $("#social-share-box").hide();
        }
      });
  }
}

function showSocialShare(documentHash) {

  const verifyLink = window.location.origin + "/verify.html?hash=" + documentHash;

  
  const shareText = "🎓 I just verified my official certificate on the Blockchain using ShubhChain! It's 100% tamper-proof and secured by Web3. Check it out here: 👇";

  
  document.getElementById("share-linkedin").href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(verifyLink)}`;
  document.getElementById("share-twitter").href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(verifyLink)}`;
  document.getElementById("share-whatsapp").href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + "\n\n" + verifyLink)}`;

  
  $("#social-share-box").fadeIn("slow");
}

function checkURL() {
  let url_string = window.location.href;
  let url = new URL(url_string);
  window.hashedfile = url.searchParams.get("hash");
  if (!window.hashedfile) return;

  verify_Hash();
}

async function get_Sha3() {
  $("#note").html(`<h5 class="text-warning">Hashing Your Document 😴...</h5>`);
  $("#upload_file_button").attr("disabled", false);
  console.log("file changed");
  var file = await document.getElementById("doc-file").files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = async function (evt) {

      window.hashedfile = await web3.utils.soliditySha3(evt.target.result);
      console.log(`Document Hash : ${window.hashedfile}`);
      $("#note").html(
        `<h5 class="text-center text-info">Document Hashed  😎 </h5>`
      );
    };
    reader.onerror = function (evt) {
      console.log("error reading file");
      return false;
    };
  } else {
    window.hashedfile = null;
    return false;
  }
}

function print_verification_info(result, is_verified) {
    console.log("Full Blockchain Data:", result); 

    const docElement = document.getElementById("student-document");
    const downloadLink = document.getElementById("download-document");
    
    
    if(docElement) docElement.src = "./files/notvalid.svg";
    $("#loader").hide();

    if (!is_verified) {
        $("#download-document, #student-info-row").hide();
        $("#doc-status").html(`<h3 class="text-danger">Certificate not Verified 😕</h3>`);
        $("#file-hash").html(`<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(window.hashedfile)}`);
        $(".transaction-status").show();
    } else {
        $("#download-document, #college-name, #contract-address, #time-stamps, #blockNumber").show();

       
        let ipfsHash = "";
        Object.values(result).forEach(val => {
            if (typeof val === 'string' && (val.startsWith("Qm") || val.startsWith("ba"))) {
                ipfsHash = val;
            }
        });

        const studentName = result[3]; 
        const collegeName = result[2] === ipfsHash ? result[4] : result[2];

        
        if (document.getElementById("verified-student-name")) {
            $("#student-info-row").fadeIn();
            document.getElementById("verified-student-name").innerText = studentName;
        }

        $("#doc-status").html(`<h3 class="text-info">Certificate Verified Successfully 😊</h3>`);
        $("#file-hash").html(`<span class="text-info"><i class="fa-solid fa-hashtag"></i></span> ${truncateAddress(window.hashedfile)}`);
        $("#college-name").html(`<span class="text-info"><i class="fa-solid fa-university"></i></span> ${collegeName}`);

        
        var t = new Date(result[1] * 1000);
        $("#time-stamps").html(`<span class="text-info"><i class="fa-solid fa-clock"></i> </span>${t.toLocaleString()}`);
        $("#blockNumber").html(`<span class="text-info"><i class="fa-solid fa-cube"></i></span> ${result[0]}`);

        
        if (ipfsHash) {
            const fullIpfsUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
            downloadLink.href = fullIpfsUrl;

            
            docElement.style.display = "block";
            docElement.src = fullIpfsUrl;

            const oldFrame = document.getElementById("pdf-preview-frame");
            if(oldFrame) oldFrame.remove();

            
            docElement.onerror = function() {
                this.style.display = "none"; 
                
                const iframe = document.createElement("iframe");
                iframe.id = "pdf-preview-frame";
                iframe.src = fullIpfsUrl;
                iframe.style.width = "100%";
                iframe.style.height = "450px";
                iframe.style.border = "1px solid rgba(0, 245, 255, 0.2)";
                iframe.style.borderRadius = "12px";
                
                
                this.parentNode.appendChild(iframe);
            };

            
            docElement.onload = function() {
                this.style.display = "block";
                const frame = document.getElementById("pdf-preview-frame");
                if(frame) frame.remove();
            };

        } else {
            console.error("IPFS Hash missing!");
        }

        $(".transaction-status").show();
    }
}

function hide_txInfo() {
  $(".transaction-status").addClass("d-none");
}

function show_txInfo() {
  $(".transaction-status").removeClass("d-none");
}


async function get_ethBalance() {
  await web3.eth.getBalance(window.userAddress, function (err, balance) {

   
    if (err === null) {
      $("#userBalance").html(
        "<i class='fa-brands fa-gg-circle mx-2 text-danger'></i>" +
        web3.utils.fromWei(balance).substr(0, 6) +
        ""
      );
    } else {
      $("#userBalance").html("n/a");
    }

    
    const balanceElement = document.getElementById("balance");
    if (balanceElement) { 
      if (err === null) {
        balanceElement.innerHTML = web3.utils.fromWei(balance).substr(0, 6) + " ETH";
      } else {
        balanceElement.innerHTML = "n/a";
      }
    }

  });
}
if (window.ethereum) {
  window.ethereum.on("accountsChanged", function (accounts) {
    connect();
  });
}

function printUploadInfo(result) {
    
    const sName = document.getElementById("studentName").value;

    
    const displayElement = document.getElementById("display-student-name");
    if (displayElement) {
        displayElement.innerText = sName;
    }

  
    $("#transaction-hash").html(
        `<a target="_blank" title="View Transaction" href="${window.CONTRACT.explore}/tx/${result.transactionHash}">
         <i class="fa fa-check-circle font-size-2 mx-1 text-white mx-1"></i></a> ${truncateAddress(result.transactionHash)}`
    );

   
    $("#file-hash").html(`<i class="fa-solid fa-hashtag mx-1"></i> ${truncateAddress(window.hashedfile)}`);

 
    $("#contract-address").html(`<i class="fa-solid fa-file-contract mx-1"></i> ${truncateAddress(result.to)}`);

   
    $("#time-stamps").html('<i class="fa-solid fa-clock mx-1"></i>' + getTime());
    $("#blockNumber").html(`<i class="fa-solid fa-link mx-1"></i>${result.blockNumber}`);
    $("#blockHash").html(`<i class="fa-solid fa-shield mx-1"></i> ${truncateAddress(result.blockHash)}`);

   
    $("#loader").addClass("d-none");
    $("#upload_file_button").addClass("d-block").attr("disabled", false);

    
    show_txInfo();
    

    if (window.updateDashboardStats) {
        window.updateDashboardStats(window.userAddress, false); 
    }

    get_ethBalance();

   
    $("#note").html(`<h5 class="text-info">
        Transaction Confirmed to the BlockChain 😊<i class="mx-2 text-info fa fa-check-circle" aria-hidden="true"></i>
    </h5>`);

    
    listen();
}
async function getFilebinInfo(filebinUrl, filebinId) {
  try {
    const response = await fetch(
      `https://api.pdfrest.com/resource/${window.hashedfile}?format=url`,
      {
        method: "GET",
        headers: {},
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to retrieve file information:",
        await response.text()
      );
    }

    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error("Error fetching file information:", error);
    throw error; 
  }
}


async function uploadFileToIpfs() {
    const fileInput = document.getElementById("doc-file");
    const file = fileInput.files[0];

    
    if (!file) {
        Swal.fire({
            icon: 'error',
            title: 'NO_FILE_DETECTED',
            text: 'Please select a document to secure on ShubhChain.',
            background: '#020c12',
            color: '#fff',
            customClass: { popup: 'cyber-popup-border' }
        });
        return;
    }

   
    $("#note").html(`<h5 class="text-warning"><i class="fa-solid fa-cloud-arrow-up fa-bounce me-2"></i> UPLOADING TO PINATA CLOUD...</h5>`);
    $("#loader").removeClass("d-none").show();

    const formData = new FormData();
    formData.append("file", file);

    
    const metadata = JSON.stringify({
        name: `ShubhChain_${file.name}`,
        keyvalues: {
            upload_date: new Date().toISOString(),
            system: "ShubhChain_v2"
        }
    });
    formData.append('pinataMetadata', metadata);

    try {
        // 🌐 URL Badla: Localhost se Pinata API par
        const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: "POST",
            headers: {
                // Pinata JWT Authentication
                'Authorization': `Bearer ${PINATA_JWT}` 
            },
            body: formData,
        });

        if (!response.ok) {
            const errorBody = await response.json();
            console.error("Pinata Error Details:", errorBody);
            throw new Error("Pinata authorization failed or limit exceeded.");
        }

        const data = await response.json();
        
        // Pinata mein CID key ka naam 'IpfsHash' hota hai
        const ipfsCID = data.IpfsHash; 
        
        console.log("✅ Successfully Uploaded to Cloud IPFS. Hash:", ipfsCID);
        
        // Note ko update karein transaction shuru hone se pehle
        $("#note").html(`<h5 class="text-info"><i class="fa-solid fa-check-circle me-2"></i> Cloud Storage Secured. Preparing Ledger...</h5>`);

        // Return the CID so 'sendHash' function can use it for Smart Contract
        return ipfsCID;

    } catch (error) {
        console.error("❌ IPFS Upload Error:", error);
        $("#note").html(`<h5 class="text-danger">Upload Failed! Check Pinata JWT or Internet Connection.</h5>`);
        $("#loader").addClass("d-none");
        
        Swal.fire({
            icon: 'error',
            title: 'CLOUD_UPLOAD_ERROR',
            text: 'System could not reach Pinata nodes. Verify your API settings.',
            background: '#020c12',
            color: '#ff0055'
        });
        throw error;
    }
}
async function sendHash() {
  // 🎓 1. Inputs fetch karein
  const studentEmailInput = document.getElementById("studentEmail").value;
  const studentNameInput = document.getElementById("studentName").value;

  // Validation: Dono fields zaruri hain
  if (!studentEmailInput || !studentNameInput) {
    alert("⚠️ Please enter both Student Name and Email ID before uploading.");
    return;
  }

  // UI Setup
  $("#loader").removeClass("d-none");
  $("#upload_file_button").slideUp();
  $("#note").html(`<h5 class="text-info">Please confirm the transaction 🙂</h5>`);
  $("#upload_file_button").attr("disabled", true);

  get_ChainID();

  try {
    // 🚀 Step 1: Upload to IPFS
    const CID = await uploadFileToIpfs();

    if (window.hashedfile && window.hashedfile.length > 4) {
      // 🚀 Step 2: Blockchain Transaction (Ab 4 parameters ja rahe hain)
      await window.contract.methods
        .addDocHash(
          window.hashedfile,
          CID,
          studentNameInput,
          studentEmailInput // ✅ Naya parameter joda gaya
        )
        .send({ from: window.userAddress })
        .on("transactionHash", function (_hash) {
          $("#note").html(
            `<h5 class="text-warning p-1 text-center mt-3">
                            <i class="fa-solid fa-spinner fa-spin"></i> Securing Document for ${studentNameInput} on ShubhChain...
                        </h5>`
          );
        })
        .on("receipt", function (receipt) {
          // UI updates aur QR generation
          printUploadInfo(receipt);
          generateQRCode();

          // 🚀 Step 3: Email Notification
          if (typeof sendEmailNotification === "function") {
            sendEmailNotification(studentEmailInput, studentNameInput, window.hashedfile);
          }

          $("#note").html(`<h5 class="text-info">Success! Document for ${studentNameInput} is now permanent. ✅</h5>`);
        })
        .on("error", function (error) {
          console.error(error.message);
          $("#note").html(`<h5 class="text-center text-danger">Transaction Failed! Not authorized or rejected. ❌</h5>`);
          $("#loader").addClass("d-none");
          $("#upload_file_button").slideDown().attr("disabled", false);
        });
    }
  } catch (error) {
    console.error("IPFS/Upload Error:", error);
    $("#note").html(`<h5 class="text-center text-danger">System Error: Check IPFS Connection. ❌</h5>`);
    $("#loader").addClass("d-none");
    $("#upload_file_button").slideDown().attr("disabled", false);
  }
}

async function deleteHash() {
  if (!window.hashedfile) {
    // 🔴 Middle error popup agar file select nahi hai
    Swal.fire({
      icon: 'error',
      title: 'NO FILE SELECTED',
      text: 'Please select or drop a certificate first! 📁',
      background: '#020c12',
      color: '#ff0055',
      confirmButtonColor: '#ff0055'
    });
    return;
  }

  // Details fetch logic
  $("#note").html(`<h5 class="text-info">Searching ShubhChain Records... 🔍</h5>`);

  try {
    const result = await window.contract.methods.findDocHash(window.hashedfile).call({ from: window.userAddress });

    if (result[0] != "0") {
      // Card details update
      $("#delete-preview-card").removeClass("d-none").fadeIn();
      document.getElementById("display-student-name").innerText = result[3];
      document.getElementById("display-college-name").innerText = result[2];
      document.getElementById("display-file-hash").innerText = truncateAddress(window.hashedfile);

      // 🚀 STEP 2: MIDDLE CYBERPUNK CONFIRMATION BOX
      Swal.fire({
        title: 'ERASE PERMANENT RECORD !',
        html: `Are you sure you want to permanently ERASE the record of <b style="color: #00f5ff;">${result[3]}</b>? <br><br> <small class="text-danger">This action cannot be undone!</small>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff0055', // Red for delete
        cancelButtonColor: '#00f5ff',  // Cyan for cancel
        confirmButtonText: 'YES, DELETE IT!',
        background: '#020c12',
        color: '#fff',
        customClass: {
          popup: 'cyber-popup-border'
        }
      }).then(async (swalResult) => {
        if (swalResult.isConfirmed) {

          $("#loader").removeClass("d-none").show();
          $("#upload_file_button").slideUp();
          $("#note").html(`<h5 class="text-danger">Processing Deletion on Blockchain... 🧨</h5>`);

          // Blockchain transaction call
          await window.contract.methods
            .deleteDocHash(window.hashedfile)
            .send({ from: window.userAddress })
            .on("transactionHash", function (hash) {
              $("#note").html(`<h5 class="text-info">Mining transaction... 😴</h5>`);
            })
            .on("receipt", function (receipt) {
              $("#loader").addClass("d-none");

              // 🎉 SUCCESS MIDDLE POPUP
              Swal.fire({
                icon: 'success',
                title: 'RECORD ERASED!',
                text: 'The document record is no longer on ShubhChain.',
                background: '#020c12',
                color: '#00f5ff',
                confirmButtonColor: '#00f5ff'
              }).then(() => {
                window.location.reload();
              });
            })
            .on("error", function (error) {
              $("#loader").addClass("d-none");
              $("#upload_file_button").slideDown();
              Swal.fire({
                icon: 'error',
                title: 'FAILED!',
                text: error.message,
                background: '#020c12',
                color: '#ff0055'
              });
            });
        } else {
          $("#note").html(`<h5 class="text-warning">Deletion Cancelled.</h5>`);
        }
      });
    } else {
      $("#note").html(`<h5 class="text-danger">Error: Document not found! ❌</h5>`);
    }
  } catch (err) {
    console.error(err);
    $("#note").html(`<h5 class="text-danger">Error fetching details.</h5>`);
  }
}
function getTime() {
  let d = new Date();
  a =
    d.getFullYear() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getDate() +
    " - " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    ":" +
    d.getSeconds();
  return a;
}


async function get_ChainID() {
  let a = await web3.eth.getChainId();
  console.log(a);
  switch (a) {
    case 1:
      window.chainID = "Ethereum Main Network (Mainnet)";
      break;
    case 80001:
      window.chainID = "Polygon Test Network";
      break;
    case 137:
      window.chainID = "Polygon Mainnet";
      break;
    case 11155111:
      window.chainID = "Sepolia";
      break;
    case 3:
      window.chainID = "Ropsten Test Network";
      break;
    case 4:
      window.chainID = "Rinkeby Test Network";
      break;
    case 5:
      window.chainID = "Goerli Test Network";
      break;
    case 42:
      window.chainID = "Kovan Test Network";
      break;
    case 1337:
      window.chainID = "Ganache (1337)";
      break;
    default:
      window.chainID = "Uknnown ChainID";
      break;
  }
  let network = document.getElementById("network");
  if (network) {
    document.getElementById(
      "network"
    ).innerHTML = `<i class="text-info fa-solid fa-circle-nodes mx-2"></i>${window.chainID}`;
  }
}

function get_Sha3() {
  hide_txInfo();
  $("#note").html(`<h5 class="text-warning">Hashing Your Document 😴...</h5>`);

  $("#upload_file_button").attr("disabled", false);

  console.log("file changed");

  var file = document.getElementById("doc-file").files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (evt) {

      window.hashedfile = web3.utils.soliditySha3(evt.target.result);
      console.log(`Document Hash : ${window.hashedfile}`);
      $("#note").html(
        `<h5 class="text-center text-info">Document Hashed  😎 </h5>`
      );
    };
    reader.onerror = function (evt) {
      console.log("error reading file");
    };
  } else {
    window.hashedfile = null;
  }
}


function disconnect() {
  // 🔴 Mark as disconnected in session
  sessionStorage.setItem("userChoice", "disconnected");
  window.localStorage.removeItem("userAddress");
  window.userAddress = null;

  // 🟢 Dashboard UI Reset
  if (document.getElementById("userAddress")) document.getElementById("userAddress").innerText = "Not Connected";
  if (document.getElementById("userBalance")) document.getElementById("userBalance").innerText = "0.00 ETH";
  if (document.getElementById("network")) document.getElementById("network").innerText = "None";

  // Final Refresh to clear all states
  window.location.reload();
}


function truncateAddress(address) {
  if (!address) {
    return;
  }
  return `${address.substr(0, 7)}...${address.substr(
    address.length - 8,
    address.length
  )}`;
}

async function addExporter() {
    const address = document.getElementById("Exporter-address").value;
    const info = document.getElementById("info").value;

    if (info && address) {
        $("#loader").removeClass("d-none");
        $("#ExporterBtn, #edit, #delete").slideUp().attr("disabled", true);
        $("#note").html(`<h5 class="text-info">Please confirm the transaction 👍...</h5>`);
        
        get_ChainID();

        try {
            await window.contract.methods
                .add_Exporter(address, info)
                .send({ from: window.userAddress })
                .on("transactionHash", function (hash) {
                    $("#note").html(`<h5 class="text-info p-1 text-center">Mining transaction... 😴</h5>`);
                })
                .on("receipt", async function (receipt) {
                    $("#loader").addClass("d-none");
                    $("#ExporterBtn, #edit, #delete").slideDown().attr("disabled", false);
                    $("#note").html(`<h5 class="text-info">Exporter Added Successfully 😇</h5>`);

                    // 🚀 LIVE UPDATE LOGIC
                    localStorage.setItem("lastAddedExporter", address); // Backup for sync
                    window.isFetchingExporters = false; // Guard reset
                    if (window.loadExporterList) await window.loadExporterList();
                    if (window.updateDashboardStats) window.updateDashboardStats(window.userAddress, true);

                    // Clear inputs
                    document.getElementById("Exporter-address").value = "";
                    document.getElementById("info").value = "";
                })
                .on("error", function (error) {
                    $("#note").html(`<h5 class="text-center text-danger">Failed! Already exists or rejected. ❌</h5>`);
                    $("#loader").addClass("d-none");
                    $("#ExporterBtn, #edit, #delete").slideDown().attr("disabled", false);
                });
        } catch (error) {
            $("#note").html(`<h5 class="text-center text-danger">${error.message}</h5>`);
            $("#loader").addClass("d-none");
            $("#ExporterBtn, #edit, #delete").slideDown().attr("disabled", false);
        }
    } else {
        $("#note").html(`<h5 class="text-center text-warning">Address & Information required!</h5>`);
    }
}
async function getExporterInfo() {
  await window.contract.methods
    .getExporterInfo(window.userAddress)
    .call({ from: window.userAddress })

    .then((result) => {
      window.info = result;
    });
}

// 🚀 GLOBAL STATES
window.allHistoryEvents = [];

// 📊 UPDATED: Role-Based Stats with Smart Wait
window.updateDashboardStats = async function (address, isAdmin) {
    if (!window.contract || !window.web3) {
        setTimeout(() => window.updateDashboardStats(address, isAdmin), 1000);
        return;
    }

    const cleanAddress = address.toLowerCase();

    if (isAdmin) {
        // 👑 ADMIN: Global Stats
        $("#stat-exporters-box").show();
        try {
            const totalHashes = await window.contract.methods.count_hashes().call();
            const totalExporters = await window.contract.methods.count_Exporters().call();
            $("#num-hashes").text(totalHashes);
            $("#num-exporters").text(totalExporters);
        } catch (e) { console.error("Admin Stats Error:", e); }
    } else {
        // 🧪 EXPORTER: Personal Stats Only (Logic from Admin Page)
        $("#stat-exporters-box, #num-exporters").hide(); 
        $(".cyber-card h5").html('<i class="fa-solid fa-upload text-info me-2"></i>EXPORTER DASHBOARD');

        try {
            // Hum block-chain se saare upload aur delete events mangwayenge
            const uploadEvents = await window.contract.getPastEvents("addHash", {
                filter: { _exporter: cleanAddress },
                fromBlock: 0, 
                toBlock: "latest"
            });

            const deleteEvents = await window.contract.getPastEvents("deleteHashEvent", {
                filter: { _exporter: cleanAddress },
                fromBlock: 0, 
                toBlock: "latest"
            });

            // LOGIC: Uploads - Deletions
            const activeCount = uploadEvents.length - deleteEvents.length;
            
            $("#num-hashes").text(activeCount);
            console.log("Count Updated for Exporter:", activeCount);
        } catch (err) {
            console.error("Filter Error:", err);
            $("#num-hashes").text("0");
        }
    }
    
    // Background sync
    if (typeof get_ethBalance === "function") get_ethBalance();
    if (typeof get_ChainID === "function") get_ChainID();
};
// 📋 History Loading with Case-Insensitive Fix
async function editExporter() {
    const address = document.getElementById("Exporter-address").value;
    const info = document.getElementById("info").value;

    if (info && address) {
        $("#loader").removeClass("d-none");
        $("#ExporterBtn").slideUp();
        $("#edit").slideUp();
        $("#delete").slideUp();
        $("#note").html(
            `<h5 class="text-info">Please confirm the transaction 😴...</h5>`
        );
        $("#ExporterBtn").attr("disabled", true);
        
        if (typeof get_ChainID === "function") get_ChainID();

        try {
            await window.contract.methods
                .alter_Exporter(address, info)
                .send({ from: window.userAddress })
                .on("transactionHash", function (hash) {
                    $("#note").html(
                        `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined 😇...</h5>`
                    );
                })
                .on("receipt", async function (receipt) {
                    $("#loader").addClass("d-none");
                    $("#ExporterBtn").slideDown();
                    $("#edit").slideDown();
                    $("#delete").slideDown();
                    $("#ExporterBtn").attr("disabled", false);
                    
                    console.log("Edit Receipt:", receipt);
                    $("#note").html(
                        `<h5 class="text-info">Exporter Updated Successfully 😊</h5>`
                    );

                    // 🚀 LIVE UPDATE: Bina refresh kiye list update hogi
                    window.isFetchingExporters = false; // Guard reset
                    if (typeof window.loadExporterList === "function") {
                        await window.loadExporterList();
                    }

                    // Input fields clear kar dein
                    document.getElementById("Exporter-address").value = "";
                    document.getElementById("info").value = "";
                })
                .on("error", function (error) {
                    console.log(error.message);
                    $("#note").html(`<h5 class="text-center text-danger">${error.message} ❌</h5>`);
                    $("#loader").addClass("d-none");
                    $("#ExporterBtn").slideDown();
                    $("#edit").slideDown();
                    $("#delete").slideDown();
                    $("#ExporterBtn").attr("disabled", false);
                });
        } catch (error) {
            $("#note").html(`<h5 class="text-center text-danger">${error.message} ❌</h5>`);
            $("#loader").addClass("d-none");
            $("#ExporterBtn").slideDown();
            $("#edit").slideDown();
            $("#delete").slideDown();
            $("#ExporterBtn").attr("disabled", false);
        }
    } else {
        $("#note").html(
            `<h5 class="text-center text-warning">You need to provide address & information to update 😵‍💫 </h5>`
        );
    }
}

async function deleteExporter() {
    const address = document.getElementById("Exporter-address").value;

    if (address) {
        $("#loader").removeClass("d-none");
        $("#ExporterBtn").slideUp();
        $("#edit").slideUp();
        $("#delete").slideUp();
        $("#note").html(
            `<h5 class="text-info">Please confirm the transaction 😕...</h5>`
        );
        $("#ExporterBtn").attr("disabled", true);
        
        if (typeof get_ChainID === "function") get_ChainID();

        try {
            await window.contract.methods
                .delete_Exporter(address)
                .send({ from: window.userAddress })
                .on("transactionHash", function (hash) {
                    $("#note").html(
                        `<h5 class="text-info p-1 text-center">Please wait for transaction to be mined 😴 ...</h5>`
                    );
                })
                .on("receipt", async function (receipt) {
                    $("#loader").addClass("d-none");
                    $("#ExporterBtn").slideDown();
                    $("#edit").slideDown();
                    $("#delete").slideDown();
                    $("#ExporterBtn").attr("disabled", false);
                    
                    console.log("Delete Receipt:", receipt);
                    $("#note").html(
                        `<h5 class="text-info">Exporter Deleted Successfully 🙂</h5>`
                    );

                    // 🚀 LIVE UPDATE: Refresh the list and stats immediately
                    window.isFetchingExporters = false; // Reset guard
                    if (typeof window.loadExporterList === "function") {
                        await window.loadExporterList();
                    }
                    if (typeof window.updateDashboardStats === "function") {
                        window.updateDashboardStats(window.userAddress, true);
                    }

                    // Input field clear kar dein
                    document.getElementById("Exporter-address").value = "";
                    document.getElementById("info").value = "";
                })
                .on("error", function (error) {
                    console.log(error.message);
                    $("#note").html(`<h5 class="text-center text-danger">${error.message} 🙂</h5>`);
                    $("#loader").addClass("d-none");
                    $("#ExporterBtn").slideDown();
                    $("#edit").slideDown();
                    $("#delete").slideDown();
                    $("#ExporterBtn").attr("disabled", false);
                });
        } catch (error) {
            $("#note").html(`<h5 class="text-center text-danger">${error.message} 🙂</h5>`);
            $("#loader").addClass("d-none");
            $("#ExporterBtn").slideDown();
            $("#edit").slideDown();
            $("#delete").slideDown();
            $("#ExporterBtn").attr("disabled", false);
        }
    } else {
        $("#note").html(
            `<h5 class="text-center text-warning">You need to provide address to delete 👍</h5>`
        );
    }
}
// Generate QR code so any one an Verify the documents
//note: if you r using local server you need to replace 127.0.0.1 with your machine local ip address got from the router
// 🚀 ONLINE QR GENERATOR: Works for both Localhost and Live Domains
function generateQRCode() {
  const qrContainer = document.getElementById("qrcode");
  if (!qrContainer) return;
  
  qrContainer.innerHTML = ""; // Purana QR saaf karein
  console.log("Generating Secure QR Code...");

  var qrcode = new QRCode(qrContainer, {
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
    width: 256, // Fixed standard size
    height: 256
  });

  if (!window.hashedfile) {
    console.error("Hash missing for QR generation");
    return;
  }

  // 🌐 FIX: window.location.origin use karne se ye automatically 
  // http://localhost:5500 ya https://shubhchain.vercel.app utha lega
  let url = `${window.location.origin}/verify.html?hash=${window.hashedfile}`;
  
  qrcode.makeCode(url);

  // 🔗 Verification Link button update
  const verifyBtn = document.getElementById("verfiy");
  if (verifyBtn) verifyBtn.href = url;

  // 📥 Download Setup
  function makeDownload() {
    const qrImg = document.querySelector("#qrcode img");
    const downloadLink = document.getElementById("download-link");
    const fileInput = document.getElementById("doc-file");

    if (qrImg && downloadLink) {
      downloadLink.href = qrImg.src;
      // Download name original file name + _QR rakhte hain
      const originalName = fileInput.files[0] ? fileInput.files[0].name.split('.')[0] : "Document";
      downloadLink.download = `${originalName}_ShubhChain_QR.png`;
    }
  }

  // QR code render hone mein thoda time leta hai isliye timeout zaroori hai
  setTimeout(makeDownload, 800);
}

//check old transaction and show them if exist
//Transactions in last afew hours will show but very old transactions wont show
// cuz the pastEvents returns transactions in last 999 block
// 🚀 1. Blockchain se data laane wala function
async function listen() {
  console.log("Fetching recent uploads...");
  if (window.location.pathname != "/upload.html") return;

  // Loader dikhao
  let loadingTx = document.querySelector(".loading-tx");
  if (loadingTx) loadingTx.classList.remove("d-none");

  try {
    // Blockchain se past events (history) nikalo
    const events = await window.contract.getPastEvents("addHash", {
      filter: {
        _exporter: window.userAddress, // Sirf current Admin ke documents
      },
      fromBlock: 0, // Shuruwat se ab tak
      toBlock: "latest",
    });

    printTransactions(events); // List print karo
  } catch (error) {
    console.error("Error fetching history:", error);
  }
}

// 🚀 2. Data ko mast Card design mein screen par dikhane wala function
// 🚀 2. Data ko COMPACT Card design mein screen par dikhane wala function
// 🚀 CYBERPUNK RECENT TRANSACTIONS FUNCTION
// 🚀 COMPACT CYBERPUNK RECENT TRANSACTIONS FUNCTION
// 🚀 ONLINE SYNC: Pinata Gateway Integration for Recent Upload Cards
function printTransactions(data) {
  const main = document.querySelector(".transactions");
  let loadingTx = document.querySelector(".loading-tx");

  if (main) main.innerHTML = ""; // Purana kachra saaf karo
  if (loadingTx) loadingTx.classList.add("d-none"); // Loader band karo

  // Agar koi document nahi hai toh header chupao
  if (!data || data.length === 0) {
    $("#recent-header").hide();
    return;
  }

  $("#recent-header").show(); // Header dikhao

  // Latest document sabse pehle dikhane ke liye reverse loop
  for (let i = data.length - 1; i >= 0; i--) {
    const txHash = data[i].transactionHash;
    const ipfsHash = data[i].returnValues._ipfsHash;

    // Student ka naam event se nikalna
    const studentName = data[i].returnValues._studentName || `Doc #${i + 1}`;

    // 🚀 COMPACT HOLOGRAPHIC CARD UI (With Pinata Link)
    const cardHTML = `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3" data-aos="zoom-in" data-aos-delay="${(data.length - i) * 30}">
        <div class="cyber-doc-card h-100" style="padding: 15px;">
            
            <div class="doc-card-header d-flex justify-content-between align-items-center mb-2">
                <h6 class="fw-bold mb-0 neon-text" style="font-size: 0.95rem;">
                    <i class="fa-solid fa-user-graduate me-1 text-info"></i> ${studentName}
                </h6>
                <a href="${window.CONTRACT.explore}/tx/${txHash}" target="_blank" class="tx-link px-2 py-1" style="font-size: 0.8rem;" title="View Transaction on Explorer">
                    Tx <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                </a>
            </div>
            
            <div class="cyber-info-row compact mb-3 d-flex align-items-center" style="padding: 8px 10px;">
                <i class="fa-solid fa-cube neon-icon me-2" style="font-size: 0.85rem; min-width: 15px;"></i>
                <span class="cyber-data text-truncate d-inline-block" style="max-width: 85%; font-size: 0.8rem;" title="IPFS Hash: ${ipfsHash}">
                    ${ipfsHash}
                </span>
            </div>

            <div class="mt-auto text-center">
                <a href="https://gateway.pinata.cloud/ipfs/${ipfsHash}" target="_blank" class="btn cyber-btn-view btn-sm w-100" style="padding: 6px 0; font-size: 0.85rem;">
                    <i class="fa-solid fa-eye me-1"></i> View File
                </a>
            </div>
            
        </div>
      </div>
    `;
    main.innerHTML += cardHTML;
  }
}
// ==========================================
// 🚀 DRAG AND DROP JAVASCRIPT LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const dropZoneElement = document.getElementById("drop-zone");
    const inputElement = document.getElementById("doc-file");

    // 🕵️ SAFETY CHECK: Sirf tabhi code chale jab hum Upload page par hon
    if (dropZoneElement && inputElement) {
        console.log("Upload terminal detected: Initializing drag & drop handlers...");

        // 1. Box pe click karne se file browser khulega
        dropZoneElement.addEventListener("click", (e) => {
            inputElement.click();
        });

        // 2. Drag over animation
        dropZoneElement.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZoneElement.classList.add("drop-zone--over");
        });

        // 3. Drag leave animation
        ["dragleave", "dragend"].forEach((type) => {
            dropZoneElement.addEventListener(type, (e) => {
                dropZoneElement.classList.remove("drop-zone--over");
            });
        });

        // 4. Jab file Drop ki jaye
        dropZoneElement.addEventListener("drop", (e) => {
            e.preventDefault();
            if (e.dataTransfer.files.length) {
                inputElement.files = e.dataTransfer.files; 
                if (typeof showFileName === "function") showFileName(inputElement); 
                if (typeof get_Sha3 === "function") get_Sha3(); 
            }
            dropZoneElement.classList.remove("drop-zone--over");
        });
    } else {
        // Dashboard page par ye line console mein dikhegi, par crash nahi hoga
        console.log("Admin command center active: Skipping upload listeners.");
    }
});
// File ka naam screen par dikhane ka function
function showFileName(input) {
  if (input.files && input.files[0]) {
    const fileNameDisplay = document.getElementById("file-name-display");
    const dropZonePrompt = document.querySelector(".drop-zone__prompt");

    // Screen par naam show karein
    fileNameDisplay.style.display = "block";
    fileNameDisplay.innerHTML = `<i class="fa-solid fa-file-circle-check"></i> Ready to Upload: <b>${input.files[0].name}</b>`;

    // Box ka text chota kar dein
    dropZonePrompt.innerHTML = "Click or drag to change file";
  }
}
// ==========================================
// 🚀 DRAG & DROP FILE PREVIEW FEATURE
// ==========================================

const dropZoneElement = document.getElementById("drop-zone");
const inputElement = document.getElementById("doc-file");
const promptBox = document.getElementById("drop-zone-prompt-box");
const previewBox = document.getElementById("drop-zone-preview-box");
const imagePreview = document.getElementById("image-preview");
const pdfPreview = document.getElementById("pdf-preview");
const previewFilename = document.getElementById("preview-filename");

// Only run this script on upload page
if (dropZoneElement) {

  // 1. Jab file drag karke box ke upar layen
  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  // 2. Jab file box se bahar le jayen
  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  // 3. Jab file ko DROP kar dein
  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZoneElement.classList.remove("drop-zone--over");

    if (e.dataTransfer.files.length) {
      // Dropped file ko input element mein set karo
      inputElement.files = e.dataTransfer.files;
      // Preview dikhao
      updateThumbnail(inputElement.files[0]);
    }
  });

  // 4. Jab "Browse File" karke select karein
  inputElement.addEventListener("change", () => {
    if (inputElement.files.length) {
      updateThumbnail(inputElement.files[0]);
    }
  });
}

// Preview generate karne wala function
function updateThumbnail(file) {
  // Purana hash aur error saaf karo
  $("#note").html("");

  // Prompt chupao, Preview dikhao
  promptBox.style.display = "none";
  previewBox.style.display = "block";

  // Check karo file type kya hai
  if (file.type.startsWith("image/")) {
    // Agar Image hai
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      imagePreview.src = reader.result;
      imagePreview.style.display = "block";
      pdfPreview.style.display = "none";
    };
  } else if (file.type === "application/pdf") {
    // Agar PDF hai (PDF ka pura preview bhari hota hai, isliye icon dikhayenge)
    imagePreview.style.display = "none";
    pdfPreview.style.display = "block";
    previewFilename.textContent = file.name;
  }

  // IMP: File select hone ke baad Hash generate karne wala function call karo
  // (Make sure get_Sha3 function aapke code mein upar define ho)
  if (typeof get_Sha3 === "function") {
    get_Sha3();
  }
}

// File remove karne wala function
function removeFile() {
  inputElement.value = ""; // Input khali karo
  promptBox.style.display = "flex"; // Prompt wapas dikhao
  previewBox.style.display = "none"; // Preview chupao
  $("#note").html(""); // Errors saaf karo
  document.getElementById("upload_file_button").disabled = true; // Button disable karo
}
// 🚀 MANUAL HASH VERIFY FUNCTION
function verifyManualHash() {
  const hashValue = document.getElementById("manual-hash-input").value.trim();

  // Check karo ki hash valid hai (0x se shuru hota hai aur 66 characters lamba hai)
  if (hashValue.length === 66 && hashValue.startsWith("0x")) {
    // Global variable me set karo
    window.hashedfile = hashValue;
    // Purana verify function call kar do
    verify_Hash();
  } else {
    alert("Please enter a valid 66-character Document Hash starting with '0x'.");
  }
}
// ============================================================
// 🌌 FUTURISTIC ANIMATION ENGINE (WITH SAFETY WRAPPER)
// ============================================================
// Ye function ensure karega ki script crash na ho agar IDs missing hon
window.initCyberAnimations = function () {

  // --- 🕵️ 1. MATRIX RAIN SAFETY ---
  const mCan = document.getElementById('matrix-canvas');
  if (mCan) { // Check ki element hai ya nahi
    const mCtx = mCan.getContext('2d');
    mCan.width = window.innerWidth;
    mCan.height = window.innerHeight;
    const drops = Array(Math.floor(mCan.width / 18)).fill(0);

    setInterval(() => {
      mCtx.fillStyle = 'rgba(2, 12, 18, 0.05)';
      mCtx.fillRect(0, 0, mCan.width, mCan.height);
      mCtx.fillStyle = '#00f5ff';
      mCtx.font = '14px monospace';
      drops.forEach((y, i) => {
        mCtx.fillText("01"[Math.floor(Math.random() * 2)], i * 18, y * 18);
        if (y * 18 > mCan.height && Math.random() > 0.98) drops[i] = 0;
        drops[i]++;
      });
    }, 50);
  }

  // --- 🕸️ 2. NODE NETWORK SAFETY ---
  const nCan = document.getElementById('node-canvas');
  if (nCan) { // Check ki element hai ya nahi
    const nCtx = nCan.getContext('2d');
    nCan.width = window.innerWidth;
    nCan.height = window.innerHeight;
    let nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));

    function drawNodes() {
      nCtx.clearRect(0, 0, innerWidth, innerHeight);
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > innerWidth) n.vx *= -1;
        if (n.y < 0 || n.y > innerHeight) n.vy *= -1;
        nCtx.beginPath(); nCtx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        nCtx.fillStyle = "rgba(0,245,255,0.5)"; nCtx.fill();
      });
      requestAnimationFrame(drawNodes);
    }
    drawNodes();
  }
};

// 🚀 SABSE ZARURI: Animations ko load ke baad safely run karein
window.addEventListener('load', () => {
  window.initCyberAnimations();
});

// Auto-run animations on page load
window.addEventListener('load', () => {
  window.initCyberAnimations();
  // Loader hiding logic
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});
// --- 🕵️ Loader Hide ---
window.addEventListener('load', () => document.getElementById('loader').style.display = 'none');

// 🚀 ROLE DETECTION & UI UPDATE
async function updateUIByRole() {
  if (!window.web3) return;

  const accounts = await window.web3.eth.getAccounts();
  const authBtn = document.getElementById("leftAuthBtn");

  if (accounts.length > 0) {
    window.userAddress = accounts[0].toLowerCase();

    // 🔄 Button badlo: 'ACCESS TERMINAL' -> 'DASHBOARD'
    if (authBtn) {
      authBtn.innerHTML = `<i class="fa-solid fa-user-shield me-2"></i>DASHBOARD`;
      authBtn.classList.replace("cyber-btn-outline-cyan", "cyber-btn-outline-red");
      authBtn.onclick = () => window.location.href = "admin.html"; // Seedha admin page
    }

    try {
      const ownerAddress = await window.contract.methods.owner().call();
      const exporterData = await window.contract.methods.Exporters(window.userAddress).call();

      // Pehle sab chhupao
      $(".exporter-only, .admin-only").hide();

      if (window.userAddress === ownerAddress.toLowerCase()) {
        // 👑 Case 1: ShubhChain Owner (Aap)
        $(".admin-only").show();
        $(".exporter-only").hide(); // 🚫 Privacy: Owner ko upload nahi dikhega
        console.log("Admin Access: Management Mode Only");
      }
      else if (exporterData.blockNumber != "0") {
        // 🧪 Case 2: Authorized Exporter
        $(".exporter-only").show();
        $(".admin-only").hide(); // 🚫 No Admin settings for Exporters
        console.log("Exporter Access: Operations Mode Active");
      }
    } catch (e) {
      console.error("Role Verification Error:", e);
    }
  }
}


// 2. 📄 RECEIPT MODAL: Full Hash aur real Email support
function showReceiptModal(data, txHash) {
  // 1. Contract se email fetch karein
  const studentEmail = data._studentEmail || "Not Registered";

  // 2. FIXED: Ab ye Transaction Hash ki jagah asli Document Hash (data._hash) dikhayega
  const actualDocHash = data._hash; 

  Swal.fire({
    title: '<div style="font-family: Orbitron; color: #00f5ff; letter-spacing: 3px; font-size: 1.2rem;">DOCUMENT INFORMATION</div>',
    html: `
            <div style="text-align: left; background: rgba(0,0,0,0.4); padding: 25px; border-radius: 12px; border: 1px solid #00f5ff44; font-family: 'Exo 2';">
                
                <div style="margin-bottom: 20px; border-bottom: 1px solid rgba(0,245,255,0.1); padding-bottom: 10px;">
                    <small style="color: #00f5ff; text-transform: uppercase; font-size: 0.7rem;">Student Name</small>
                    <div style="color: #fff; font-size: 1.3rem; font-weight: 800; margin-top: 5px;">${data._studentName}</div>
                    
                    <small style="color: #00f5ff; text-transform: uppercase; font-size: 0.7rem; display: block; margin-top: 10px;">Email Address</small>
                    <div style="color: #a0aec0; font-size: 0.95rem;">${studentEmail}</div>
                </div>

                <div style="margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                        <small style="color: #00f5ff; text-transform: uppercase; font-size: 0.7rem;">Document Hash (SHA-3)</small>
                        <button onclick="navigator.clipboard.writeText('${actualDocHash}')" style="background:none; border:none; color:#00f5ff; font-size:0.7rem; cursor:pointer; padding:0;">
                            <i class="fa-solid fa-copy"></i> COPY
                        </button>
                    </div>
                    <code style="color: #cbd5e0; word-break: break-all; font-size: 0.75rem; background: rgba(0,0,0,0.3); padding: 10px; display: block; border-radius: 4px; line-height: 1.4; border: 1px solid rgba(0,245,255,0.1);">
                        ${actualDocHash}
                    </code>
                </div>

                <div style="margin-bottom: 15px;">
                    <small style="color: #00f5ff; text-transform: uppercase; font-size: 0.7rem; display: block; margin-bottom: 5px;">IPFS Storage CID</small>
                    <code style="color: #cbd5e0; word-break: break-all; font-size: 0.75rem; background: rgba(0,0,0,0.3); padding: 10px; display: block; border-radius: 4px;">
                        ${data._ipfsHash}
                    </code>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 25px; background: rgba(0,245,255,0.05); padding: 10px; border-radius: 8px;">
                    <div>
                        <small style="color: #00f5ff; text-transform: uppercase; font-size: 0.65rem;">Date</small>
                        <div style="color: #fff; font-size: 0.8rem;">${new Date(data._timestamp * 1000).toLocaleString('en-IN', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                          hour12: true
                        })}</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="border: 1px solid #00f5ff; color: #00f5ff; padding: 2px 8px; font-size: 0.6rem; font-weight: bold; border-radius: 2px;">SECURED_NODE</div>
                    </div>
                </div>
            </div>
        `,
    background: '#020c12',
    confirmButtonText: 'DONE',
    confirmButtonColor: '#00f5ff',
    customClass: { popup: 'cyber-modal-border' }
  });
}

// ==========================================
// 🛡️ 1. GLOBAL HELPERS (Top Level)
// ==========================================
window.getCounters = async function () { console.log("Terminal Stats: Online"); };
window.updateDashboardStats = async function (address, isAdmin) {
  try {
    if (!window.contract || !window.web3) {
      setTimeout(() => window.updateDashboardStats(address, isAdmin), 1000);
      return;
    }

    if (isAdmin) {
      // 👑 ADMIN: Sab kuch dikhao (Total System Stats)
      const totalHashes = await window.contract.methods.count_hashes().call();
      const totalExporters = await window.contract.methods.count_Exporters().call();

      $("#num-hashes").html(`<i class="fa-solid fa-file mx-2 text-warning"></i>${totalHashes}`);
      $("#num-exporters").html(`<i class="fa-solid fa-building-columns mx-2 text-info"></i> ${totalExporters}`).show();
      $("#stat-exporters-container").show();
    } else {
      // 🧪 EXPORTER: Sirf apna personal data dikhao
      
      // 1. Apne saare Uploads fetch karein
      const uploads = await window.contract.getPastEvents("addHash", {
        filter: { _exporter: address.toLowerCase() },
        fromBlock: 0, toBlock: "latest"
      });

      // 2. Apne saare Deletions fetch karein
      const deletions = await window.contract.getPastEvents("deleteHashEvent", {
        filter: { _exporter: address.toLowerCase() },
        fromBlock: 0, toBlock: "latest"
      });

      // 3. Logic: Total Uploads - Total Deletions = Active Files
      const activeCount = uploads.length - deletions.length;

      // UI Update: Sirf apna count dikhao
      $("#num-hashes").html(`<i class="fa-solid fa-file mx-2 text-warning"></i> ${activeCount}`);
      
      // SECURITY: Exporter counter ko poori tarah gayab rakho
      $("#num-exporters").hide();
      $("#stat-exporters-container").hide(); 
    }
  } catch (e) {
    console.error("Stats Update Error:", e);
  }
};
window.updateUIByRole = async function () { console.log("UI Role Updated"); }; // Fixed missing function

// ==========================================
// 🗑️ 2. GLOBAL DELETE LOGIC
// ==========================================
window.handleDashboardDelete = async function (docHash) {
  // 1. Fresh wallet address fetch karein
  const accounts = await window.web3.eth.getAccounts();
  const currentAddr = accounts[0];

  if (!currentAddr) {
    Swal.fire({ icon: 'error', title: 'Wallet Not Found', text: 'Please login to MetaMask!', background: '#020c12' });
    return;
  }

  // 2. Confirmation Box (Ab hum seedha docHash use kar rahe hain)
  Swal.fire({
    title: 'ERASE PERMANENT RECORD !',
    html: `Are you sure you want to permanently delete this record? <br><br> <small class="text-info">Hash: ${docHash.substring(0, 20)}...</small>`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ff0055',
    cancelButtonColor: '#00f5ff',
    confirmButtonText: 'YES, DELETE IT!',
    background: '#020c12',
    color: '#fff',
    customClass: { popup: 'cyber-popup-border' }
  }).then(async (swalResult) => {
    if (swalResult.isConfirmed) {
      try {
        // Loading state
        Swal.fire({
          title: 'Processing Deletion...',
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading(),
          background: '#020c12',
          color: '#fff'
        });

        // 3. BLOCKCHAIN CALL
        // Ab hum seedha docHash bhej rahe hain jo delete_Exporter logic ko chahiye
        await window.contract.methods
          .deleteDocHash(docHash) 
          .send({ from: currentAddr })
          .on("transactionHash", (hash) => {
             console.log("Transaction Hash: " + hash);
          })
          .on("receipt", (receipt) => {
            Swal.fire({
              icon: 'success',
              title: 'RECORD ERASED!',
              text: 'The document record is no longer on ShubhChain.',
              background: '#020c12',
              color: '#00f5ff'
            }).then(() => {
              window.location.reload(); 
            });
          })
          .on("error", (error) => {
            console.error("Smart Contract Error:", error);
            Swal.fire({
              icon: 'error',
              title: 'FAILED!',
              text: "Transaction Reverted. Check if you are the Authorized Exporter.",
              background: '#020c12',
              color: '#ff0055'
            });
          });

      } catch (err) {
        console.error("System Error:", err);
      }
    }
  });
};


window.loadExporterPrivateHistory = async function (address) {
  const tableBody = document.getElementById("exporter-history-body");
  if (!tableBody) return;
  
  
  tableBody.innerHTML = `<tr><td colspan="3" class="py-5 text-info text-center small opacity-50 font-monospace">SYNCING BLOCKCHAIN RECORDS...</td></tr>`;

  try {
    if (!window.contract) return;

    const uploadEvents = await window.contract.getPastEvents("addHash", {
      filter: { _exporter: address.toLowerCase() },
      fromBlock: 0, toBlock: "latest"
    });

    const deleteEvents = await window.contract.getPastEvents("deleteHashEvent", {
      filter: { _exporter: address.toLowerCase() },
      fromBlock: 0, toBlock: "latest"
    });

    const deletedHashes = new Set();
    deleteEvents.forEach(e => { deletedHashes.add(e.returnValues._hash); });

    const activeRecords = uploadEvents.filter(event => {
      return !deletedHashes.has(event.returnValues._hash);
    });

    if (activeRecords.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="3" class="py-5 text-center text-secondary small font-monospace">NO ACTIVE DOCUMENTS FOUND </td></tr>`;
      return;
    }

    const historyData = activeRecords.reverse();
    tableBody.innerHTML = "";

    historyData.forEach(event => {
      const data = event.returnValues;
      const deleteKey = data._hash; 

    
      const row = `
<tr class="shubh-terminal-row">
    <td class="ps-4 border-0" style="border-radius: 12px 0 0 12px; padding: 18px 0 18px 25px;">
        <div class="d-flex align-items-center">
            <div class="me-3 text-info" style="font-size: 1rem;"><i class="fa-solid fa-user-graduate"></i></div>
            <span class="text-white fw-bold d-block" style="font-size: 0.85rem;">${data._studentName}</span>
        </div>
    </td>
    <td class="text-center border-0 small font-monospace text-secondary">
        ${new Date(data._timestamp * 1000).toLocaleDateString()}
    </td>
    <td class="text-end pe-4 border-0" style="border-radius: 0 12px 12px 0; padding-right: 25px;">
        <div class="d-flex justify-content-end gap-2">
            <a href="https://gateway.pinata.cloud/ipfs/${data._ipfsHash}" target="_blank" class="btn btn-sm btn-outline-info px-3">VIEW</a>
            
            <button onclick='window.showReceiptModal(${JSON.stringify(data)}, "${event.transactionHash}")' class="btn btn-sm btn-outline-warning px-3">INFO</button>
            
            <button onclick="window.handleDashboardDelete('${deleteKey}')" class="btn btn-sm text-danger border-0"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </td>
</tr>`;
      tableBody.insertAdjacentHTML('beforeend', row);
    });
  } catch (e) {
    console.error("Sync Error:", e);
    tableBody.innerHTML = `<tr><td colspan="3" class="py-5 text-center text-danger small"> SYNC FAILED </td></tr>`;
  }
};


let isFetchingExporters = false;

window.loadExporterList = async function() {
    if (window.isFetchingExporters) return;
    window.isFetchingExporters = true;

    const container = document.getElementById("exporter-list-body");
    if (!container) return;

    container.innerHTML = `<div class="text-center py-4 text-info opacity-50 small font-monospace">SYNCING NODES...</div>`;

    try {
        
        const addEvents = await window.contract.getPastEvents("ExporterAdded", {
            fromBlock: 0,
            toBlock: "latest"
        });

        const exporterAddresses = new Set();
        
      
        addEvents.forEach(e => {
            if (e.returnValues._exporter) exporterAddresses.add(e.returnValues._exporter.toLowerCase());
        });

       
        try {
            const uploadEvents = await window.contract.getPastEvents("addHash", { fromBlock: 0, toBlock: "latest" });
            uploadEvents.forEach(e => exporterAddresses.add(e.returnValues._exporter.toLowerCase()));
        } catch(e) {}

        let finalHTML = "";
        let foundCount = 0;

        for (let addr of exporterAddresses) {
            const data = await window.contract.methods.Exporters(addr).call();
            
           
            if (data.blockNumber != "0") {
                foundCount++;
                finalHTML += `
                <div class="shubh-node-row p-3 px-4 row align-items-center mx-0 mb-3" data-aos="fade-up">
                    <div class="col-md-4">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-university text-info me-3"></i>
                            <span class="text-white fw-bold">${data.info}</span>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <code class="text-secondary small" style="background: rgba(0,0,0,0.4); padding: 5px 10px; border-radius: 8px;">
                            ${addr.substring(0, 15)}...${addr.substring(addr.length - 10)}
                        </code>
                    </div>
                    <div class="col-md-3 text-end pe-0">
                        <div class="d-flex justify-content-end gap-2">
                            <button onclick="window.prepareEdit('${addr}', '${data.info}')" class="btn btn-sm btn-outline-info">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="window.prepareDelete('${addr}')" class="btn btn-sm btn-outline-danger">
                                <i class="fa-solid fa-user-slash"></i>
                            </button>
                        </div>
                    </div>
                </div>`;
            }
        }

        container.innerHTML = foundCount > 0 ? finalHTML : `<div class="text-center py-5 text-secondary">DATA NOT FOUND</div>`;
        
        // Network monitor counter update
        if (document.getElementById("num-exporters")) {
            document.getElementById("num-exporters").innerHTML = `<i class="fa-solid fa-building-columns mx-2 text-info"></i> ${foundCount}`;
        }

    } catch (e) {
        console.error("Discovery Error:", e);
        container.innerHTML = `<div class="text-center py-4 text-danger small">SYNC ERROR RETRYING...</div>`;
    } finally {
        window.isFetchingExporters = false;
    }
};

// 🚀 BONUS: addExporter ko update karein taaki wo address ko memory mein save rakhe
const originalAddExporter = window.addExporter;
window.addExporter = async function() {
    const address = document.getElementById("Exporter-address").value;
    if(address) localStorage.setItem("lastAddedExporter", address); 
    await originalAddExporter();
};
// 2. Table se Edit button click karne par data form mein transfer karna
window.prepareEdit = function(addr, info) {
    const addrInput = document.getElementById("Exporter-address");
    const infoInput = document.getElementById("info");

    if(addrInput && infoInput) {
        addrInput.value = addr;
        infoInput.value = info;
        
        // Page ko smoothly scroll karke upar configuration box par le jayein
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Input boxes par animation taaki owner ko pata chale kahan edit ho raha hai
        $(addrInput).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $(infoInput).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        
        // "Note" mein message dikhayein
        $("#note").html(`<span class="text-warning"><i class="fa-solid fa-edit me-1"></i> Mode: Updating details for ${info}</span>`);
    }
};

// 3. Table se Remove button click karne par seedha blockchain process shuru karna
window.prepareDelete = function(addr) {
    const addrInput = document.getElementById("Exporter-address");
    if(addrInput) {
        addrInput.value = addr;
        
        // Confirmation ke liye SweetAlert ya simple delete calling
        Swal.fire({
            title: 'REMOVE EXPORTER?',
            text: `Address ${addr} will lose all authorization.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff0055',
            cancelButtonColor: '#00f5ff',
            confirmButtonText: 'YES, REVOKE ACCESS',
            background: '#020c12',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                // Aapka existing deleteExporter() function call hoga
                deleteExporter(); 
            }
        });
    }
};

// --- Chart Global Variable ---
let shubhChart = null;

// --- Analytics Update Function ---
window.updateAdminAnalytics = async function() {
    const ctx = document.getElementById('issuanceChart');
    const counterEl = document.getElementById("total-docs-count");
    if (!ctx) return;

    try {
        // 1. Fetch Add events
        const uploadEvents = await window.contract.getPastEvents("addHash", { fromBlock: 0, toBlock: "latest" });
        
        // 2. Fetch Delete events
        let deleteEvents = [];
        try {
            deleteEvents = await window.contract.getPastEvents("deleteHashEvent", { fromBlock: 0, toBlock: "latest" });
        } catch(e) { console.log("No delete events yet."); }

        // 3. Logic: Total - Deleted = Active Records
        const deletedHashes = new Set();
        deleteEvents.forEach(e => deletedHashes.add(e.returnValues._hash));

        // Sirf active records ko filter karo jo delete nahi huye
        const activeRecords = uploadEvents.filter(e => !deletedHashes.has(e.returnValues._hash));

        // Update Counter to 2
        if (counterEl) counterEl.innerText = activeRecords.length;

        // 4. CHART DATA PROCESSING (Only Active Records)
        const last6Months = [];
        const monthCounts = {};

        for (let i = 5; i >= 0; i--) {
            const d = new Date();
            d.setMonth(d.getMonth() - i);
            const label = d.toLocaleString('default', { month: 'short' }) + " " + d.getFullYear();
            last6Months.push(label);
            monthCounts[label] = 0;
        }

        activeRecords.forEach(event => {
            const timestamp = event.returnValues._timestamp;
            const date = new Date(timestamp * 1000);
            const eventLabel = date.toLocaleString('default', { month: 'short' }) + " " + date.getFullYear();
            if (monthCounts.hasOwnProperty(eventLabel)) monthCounts[eventLabel]++;
        });

        const chartData = Object.values(monthCounts);

        // Render Chart
        if (window.shubhChart) window.shubhChart.destroy();
        window.shubhChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: last6Months,
                datasets: [{
                    label: 'Active Records',
                    data: chartData,
                    borderColor: '#00f5ff',
                    backgroundColor: 'rgba(0, 245, 255, 0.1)',
                    pointRadius: 6,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        grid: { color: 'rgba(255,255,255,0.05)' }, 
                        ticks: { stepSize: 1, color: '#8a9ab9' } 
                    },
                    x: { grid: { display: false }, ticks: { color: '#8a9ab9' } }
                }
            }
        });

    } catch (e) {
        console.error("Analytics Error:", e);
    }
};
