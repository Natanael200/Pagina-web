class calculadora{
  solar(){
    let $input = document.getElementById("result")
    if ($input.value == "") {
      return $input.value = `No se ha ingresado ningún número`
    }
    let porcentaje = $input.value
    if (Number.isInteger(porcentaje)) {
      porcentaje /= 100
    }
    let energiaSolar = 3.846e26
    let consumoAnual = 5.34e20
    let energiaUtilizada = energiaSolar * porcentaje
    let aniosAbastecimiento = energiaUtilizada / consumoAnual
    let decadasAbastecimiento = aniosAbastecimiento / 10
    $input.value=`Con el ${porcentaje}% de la energía del sol podríamos abastecer a la Tierra durante ${decadasAbastecimiento.toFixed(2)} décadas.`
    /*$input.value=`Con el ${porcentaje}% de la energía del sol podríamos abastecer a la Tierra durante ${aniosAbastecimiento.toFixed(2)} años.`*/
  }
  limpiar(){
    let $input=document.getElementById("result")
    $input.value=""
  }
}
let cal=new calculadora()