function openTab(address, i) {
    window.open("https://maps.google.com/?q=" + address,  '_wnd' + i);
}

function openAllInTabs() {
    const addresses = document.getElementById('addresses');
    const lines = addresses.value.replace(/\r\n/g,"\n").split("\n");
    for (i = 0; i < lines.length; i++) {
        console.log(lines[i]);
        openTab(lines[i], i)
    }
}
