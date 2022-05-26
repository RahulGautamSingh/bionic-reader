function convertIt() {
    const tags = ['p', 'span', 'li']
    const ignoreChars = ['&'];
    function convertToBionic(stri) {
        let upperStr = stri.split(".");
        upperStr = upperStr.map(str => {
            str = str.split(" ").map(word => {
                const len = word.length;
                if (!ignoreChars.includes(word)) {
                    if (len & 1) {
                        word = "<strong>" + word.slice(0, len / 2 + 1) + "</strong>" + word.slice(len / 2 + 1);
                    }
                    else word = "<strong>" + word.slice(0, len / 2) + "</strong>" + word.slice(len / 2);
                }
                return word;
            });

            return str.join(" ");
        });
        return upperStr.join(".")
    }
    for (let tag of tags) {
        const tagS = document.getElementsByTagName(tag);
        for (let index = 0; index < tagS.length; index++) {
            tagS[index].innerHTML = convertToBionic(tagS[index].innerText)
        };
    }
}
convertIt();
window.addEventListener('scroll', convertIt);


// document.getElementsByTagName('p').forEach(para =>)


