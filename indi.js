let bid = document.getElementById("sbid");
let nname = document.getElementById("nname");
const skills = document.getElementsByClassName("skills");
const age = document.getElementsByName("rad");
const gossips = document.getElementsByClassName("goss");

const calculate = () =>{
    if(nname.value && bid.value){
        let price = Number(bid.value);
        const edu = Number(document.getElementById("education").value);
        price *= edu;
        const net = Number(document.getElementById("networth").value);
        price *= net;
        const castee = Number(document.getElementById("caste").value);
        price += castee;
        price = skillss(price);
        Array.from(age).forEach(ag => {
            if (ag.checked) {
                price = price * Number(ag.value);
            }
        });
        const isInteger = (value) =>{
            return Number.isInteger(Number(value.value));
        }
        const toNum = (value) =>{
            return Number(value.value);
        }
        for(let i = 0; i < gossips.length; i++){
            if(gossips[i].checked && isInteger(gossips[i])){
                price += toNum(gossips[i]);
            }
            else if(gossips[i].checked && !isInteger(gossips[i])){
                price *= toNum(gossips[i]);
            }
        }
        let letterval = document.getElementById("letter").value;
        let obj = {
            nnname: nname.value,
            price: price,
            letter: letterval
            }
            document.getElementById("calculatedPrice").innerHTML = `The price for your bride/groom ${obj.nnname} is ${obj.price} $. Your love letter is "${obj.letter}"`;
            document.getElementById('calculatedPrice').style.display = 'block';
        return;
    }
    alert("Please don't leave name and starting bid empty!");
    return;
}

function skillss(price){
    let filteration = (item) => {
        return item.checked;
    }
    let reducer = (accumulator, item) => {
        return accumulator + Number(item.value);
    } 
    let list = Array.from(skills).filter(filteration);
    let result = list.reduce(reducer, price);
    console.log(result);
    return result;
}

const res = () =>{
    document.getElementById("sbid").value = "";
    document.getElementById("nname").value = "";
    document.getElementById("education").selectedIndex = 0;
    document.getElementById("networth").selectedIndex = 0;
    document.getElementById("caste").selectedIndex = 0;
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    const radio = document.querySelectorAll('input[name="agge"]');
    radio.forEach(radio => {
        radio.checked = false;
    });
    document.getElementById('calculatedPrice').style.display = 'none';
    document.getElementById('priceValue').textContent = '';
}

document.getElementById("submit").addEventListener("click", calculate);
document.getElementById("reset").addEventListener("click", res);

const area = document.getElementById('letter');
const count = document.getElementById('count');
area.addEventListener('input', () => {
    const remain = 500 - area.value.length;
    count.textContent = `${remain} characters remaining`;
});