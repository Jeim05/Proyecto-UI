(function () {
    //Funcion que se auto invoca para proteger las variables de otros archivos

    //Construccion de un arrreglo que va a tener almacenado los titulos de las diferentes preguntas, que existan en la seccion de preguntas frecuentes
    const titleQuestions = [...document.querySelectorAll('.questions_title')];
    //... y los corchetes, hacen que lo que queramos recibir, se convierta en un array en javascript

    titleQuestions.forEach(question => {


        question.addEventListener('click', () => {

            let height = 0; //Una variable que almacene una altura de 0
            let respuesta = question.nextElementSibling; // La variable respuesta, almacenara al elemento hermano de question, que recordemos que question almacena al H3, que son las preguntas como tal
            let addPadding = question.parentElement.parentElement;//Esta variable en primera instancia se va a posicionar en el articulo que engloba a cada pregunta, que se le dio como clase QUESTION_PADDING y que en el estilo.css se le pusieron las propiedades de diseño y de padding

            addPadding.classList.toggle('questions_padding--add');
            //Esta instruccion agrega o elimina, si tiene o no tiene el modificador de la clase questions_padding

            question.children[0].classList.toggle('questions_arrow--rotate');//De question que hace referencia a la pregunta el H3, yo quiero obtener a sus hijos, en especial al primer hijo, que es la posicion 0 y entrar a sus clase y agregarle o eliminarle el modificador que le cree a la clase question_arrow que es el SPAN en donde esta la imagen flecha.

            if (respuesta.clientHeight === 0) {
                height = respuesta.scrollHeight;
            }
            //Si respuesta, que hace referencia al parrafo de la respuesta a la pregunta
            //Si la altura del parrafo que es la respuesta a la pregunta es igual a 0, entonces quiero que la variable HEIGHT sea igual al alto minimo que se necesita para mostrar el parrafo de la respuesta a la pregunta realizada en la seccion

            respuesta.style.height = `${height}px`;
            //Le indicamos que la altura del parrafo de la respuesta a la pregunta sea igual a la altura que se le indico a la clase en el estilo.css

        });
        //Question = almacena a los titulos de las preguntas, o a las preguntas en general, por ende con esta instruccion
        //yo le estoy indicando que cada vez que un usuario le de clic a la pregunta, entonces que emita una accion

    });
    //Esta funcionalidad lo que nos permite es poder movernos entre las preguntas de la seccion de
    // preguntas frequentes de manera iterativa

})();