let raio = ("Digite o raio do seu circulo");
let area;
let perimetro;
    function areaPerimetro(raio){
        area= (3.14)*(raio*raio);
        perimetro = (2*3.14*raio);
    }
areaPerimetro(raio);
alert(`a área do circulo é de ${area} e o seu perímetro é de ${perimetro}`);