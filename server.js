
//Password
let hiddenpass = (pass) => {
    let hidden = ""
    for (let index = 0; index < pass.length; index++) {
        hidden += "*";
    }
    return hidden;
}

//Copy text
let copytext = document.querySelector(".copy")
function copywebname(webname) {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(webname)
        .then(() => {
            copytext.classList.remove("invisible")
            setTimeout(() => {
                copytext.classList.add("invisible")
            }, 1800)
        })
}
function copyusername(username) {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(username)
        .then(() => {
            copytext.classList.remove("invisible")
            setTimeout(() => {
                copytext.classList.add("invisible")
            }, 1800)
        })
}
function copypassname(passname) {
    // Copy the text to the clipboard
    navigator.clipboard.writeText(passname)
        .then(() => {
            copytext.classList.remove("invisible")
            setTimeout(() => {
                copytext.classList.add("invisible")
            }, 1800)
        })
}

//Delete Data
let deletedata = (website) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data)
    let updatedarr = arr.filter((e) => {
        return e.websitename !== website
    })
    localStorage.setItem("passwords", JSON.stringify(updatedarr))
    showpass();
}

//Show Data
let showpass = () => {
    let data = localStorage.getItem("passwords")
    let td = document.querySelector("table")
    if (data == null || JSON.parse(data).length == 0) {
        td.innerHTML = `No Data Available`;
    }
    else {
        td.innerHTML = ` <tr class="border-b-[2px] border-black ">
              <th class="border-l-[2px] border-black font-extrabold ">Website</th>
              <th class="border-l-[2px] border-black font-extrabold ">Username</th>
              <th class="border-l-[2px] border-black font-extrabold ">Password</th>
              <th class="border-l-[2px] border-black font-extrabold w-[73px] ">Delete</th>
              
            </tr> `
        let arr = JSON.parse(data)
        for (let index = 0; index < arr.length; index++) {
            const e = arr[index];
            let str = ` <tr class="border-b-[2px] border-black">
    <td class="border-l-[2px] relative p-1 pl-2 border-black font-bold "> <p class="inline">
    ${e.websitename} </p>
    <lord-icon
       src="https://cdn.lordicon.com/bmlkvhui.json"
    class="web absolute right-[0.5vw] top-[6px] rounded-xl cursor-pointer"
    trigger="click"
     colors="primary:#000000,secondary:#000000,tertiary:#848484,quaternary:#e4e4e4,quinary:#b4b4b4,senary:#646e78,septenary:#848484"quinary:#f9c9c0,senary:#fad3d1"
    style="width:30px;height:30px"
    onclick="copywebname('${e.websitename}')">
</lord-icon></td>
    <td class="border-l-[2px] relative p-1 pl-2 border-black font-bold ">${e.username} <lord-icon
       src="https://cdn.lordicon.com/bmlkvhui.json"
     class=" absolute right-[0.5vw] top-[6px] rounded-xl cursor-pointer"
    trigger="click"
     
     colors="primary:#000000,secondary:#000000,tertiary:#848484,quaternary:#e4e4e4,quinary:#b4b4b4,senary:#646e78,septenary:#848484"quinary:#f9c9c0,senary:#fad3d1"
    style="width:30px;height:30px"
    onclick="copywebname('${e.username}')">
</lord-icon> </td>
    <td class="border-l-[2px] p-1 relative pl-2 border-black font-bold ">${hiddenpass(e.password)} <lord-icon
       src="https://cdn.lordicon.com/bmlkvhui.json"
     class=" absolute right-[0.5vw] top-[6px] rounded-xl cursor-pointer"
    trigger="click"
     
     colors="primary:#000000,secondary:#000000,tertiary:#848484,quaternary:#e4e4e4,quinary:#b4b4b4,senary:#646e78,septenary:#848484"quinary:#f9c9c0,senary:#fad3d1"
    style="width:30px;height:30px"
    onclick="copywebname('${e.password}')">
</lord-icon></td>
    <td class="border-l-[2px] p-1 pl-2 border-black font-bold "><button onclick="deletedata('${e.websitename}')" class="border-2 p-[3px] text-[15px] text-center border-black rounded-xl text-white bg-black font-semibold active:scale-[0.92]">Delete</button></td>
  </tr>`

            td.innerHTML = td.innerHTML + str
        }
    }
    website.value = ""
    user.value = ""
    pass.value = ""
}
showpass();

//Submit btn
let submit = document.querySelector("#submit")
submit.addEventListener("click", (e) => {
    if (website.value !== "" && user.value !== "" && pass.value !== "") {
        e.preventDefault();
        let passwords = localStorage.getItem("passwords")

        if (passwords == null) {
            let json = [];
            json.push({ websitename: website.value, username: user.value, password: pass.value })
            localStorage.setItem("passwords", JSON.stringify(json))
        }
        else {
            let json = JSON.parse(passwords)
            json.push({ websitename: website.value, username: user.value, password: pass.value })
            localStorage.setItem("passwords", JSON.stringify(json))
        }
        showpass();
    }

})



// <lord-icon
//     src="https://cdn.lordicon.com/ijahpotn.json"
//     trigger="click"
//     class=" border-[1px] rounded-xl border-black cursor-pointer"
//     state="in-newspaper"
//     style="width:30px;height:30px">
// </lord-icon>





