let altura = prompt ("Digite a altura");
let largura = prompt ("Digite a largura");
let area;
let perimetro;
 
function medida (altura, largura){
    area = (altura*largura);
    perimetro = (altura*2 + largura*2);
}  
medida (altura, largura);
    alert (`A área da sua sala é de ${area} e o perímetro da sua sala é de ${perimetro}`);