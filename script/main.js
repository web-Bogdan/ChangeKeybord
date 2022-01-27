const copy = document.querySelector('.fas');
const textarea = document.querySelector('.form-control');
const btn = document.querySelector('.btn');
const letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
const convert = ['f', ',', 'd', 'u', 'l', 't', '`', ';', 'p', 'b', 'q', 'r', 'k', 'v', 'y', 'j', 'g', 'h', 'c', 'n', 'e', 'a', '[', 'w', 'x', 'i', 'o', 'm', 's', ']', "'", '.', 'z'];
copy.onmousedown = () =>{
    copy.style.color = 'rgb(134, 76, 0)';
    navigator.clipboard.writeText(textarea.value)
}
document.body.onmouseup = () => {
    copy.style.color = 'rgb(201, 126, 27)';
}

btn.onclick = () =>{
    let value = textarea.value.split("").map(el =>  {
        if (el.toUpperCase() !== el) {
            if (convert.includes(el)){
                return letters[convert.indexOf(el)];
            } else {
                return el;
            } 
        } else { 
            if (el == '.' || el == ',' || el == ']') return letters[convert.indexOf(el)];      
            if (convert.includes(el.toLowerCase())){
                return letters[convert.indexOf(el.toLowerCase())].toUpperCase();
            } else {
                return el;
            } 
        }
});
    textarea.value = value.join("");
}