1.  ¿Los necesita para el aprendizaje profundo?

-   Muchas matemáticas F
-   Muchos datos F
-   Muchas computadoras caras F
-   Doctorado F

2.  Mencione cinco áreas en las que el aprendizaje profundo es ahora el mejor del mundo.

- Procesamiento del lenguaje natural (NLP)
- Visión por computador Imágenes de satélite y de drones
- Medicina
- Biología
- Sistemas de recomendación 
- Generación de imágenes
- Juegos
- Robótica

3. ¿Cómo se llamó el primer dispositivo que se basó en el principio de la neurona artificial?
Mark I Perceptron (Rosenblatt)

4.  Según el libro del mismo nombre, ¿cuáles son los requisitos para el procesamiento distribuido paralelo (PDP)?
-  Un conjunto de unidades de procesamiento 
 - Un estado de activación 
- Una función de salida para cada unidad 
- Un patrón de conectividad entre unidades

5.  ¿Cuáles fueron los dos malentendidos teóricos que frenaron el campo de las redes neuronales?
6. En teoría, agregar solo una capa adicional de neuronas era suficiente para permitir que cualquier función matemática se aproximara con estas redes neuronales, pero en la práctica tales redes a menudo eran demasiado grandes y demasiado lentas para ser útiles.
7.  ¿Qué es una GPU?
También conocida como tarjeta gráfica. Un tipo especial de procesador en su computadora que puede manejar miles de tareas individuales al mismo tiempo, especialmente diseñado para mostrar entornos 3D en una computadora para jugar. Estas mismas tareas básicas son muy similares a lo que hacen las redes neuronales, de modo que las GPU pueden ejecutar redes neuronales cientos de veces más rápido que las CPU normales. Todas las computadoras modernas contienen una GPU, pero pocas contienen el tipo correcto de GPU necesaria para el aprendizaje profundo.

8.    Abra un cuaderno y ejecute una celda que contenga: `1+1`. ¿Lo que sucede? da  como resultado 2
9.   ¿Por qué es difícil usar un programa de computadora tradicional para reconocer imágenes en una foto?
10.    Programar una computadora para tales cálculos es, en el mejor de los casos, una tarea difícil, no principalmente debido a cualquier complejidad inherente en la computadora en sí, sino, más bien, debido a la necesidad de deletrear cada paso minucioso del proceso con el detalle más exasperante.
11.  ¿Qué quiso decir Samuel con "asignación de peso"?
  Los pesos son solo variables, y una asignación de peso es una elección particular de valores para esas variables. Las entradas del programa son valores que procesa para producir sus resultados, por ejemplo, tomando píxeles de imagen como entradas y devolviendo la clasificación "perro" como resultado. Las asignaciones de peso del programa son otros valores que definen cómo funcionará el programa.
12.  ¿Qué término usamos normalmente en el aprendizaje profundo para lo que Samuel llamó "pesos"?
 lo que Samuel llamó "pesos" se conocen más generalmente como parámetros de modelo en estos días, en caso de que haya encontrado ese término. El término pesos se reserva para un tipo particular de parámetro de modelo.
 13.  Haz un dibujo que resuma la visión de Samuel de un modelo de aprendizaje automático.

inputs
                            **MODELO**                **RESULTADOS**
pesos

14.  ¿Por qué es difícil entender por qué un modelo de aprendizaje profundo hace una predicción particular?

15. ¿Cuál es el nombre del teorema que muestra que una red neuronal puede resolver cualquier problema matemático con cualquier nivel de precisión?
Teorema de aproximacion  universal

16.  ¿Qué necesitas para entrenar a un modelo?

`
from fastai.vision.all import *
path = untar_data(URLs.PETS)/'images'
def is_cat(x): return x[0].isupper()
dls = ImageDataLoaders.from_name_func( path, get_image_files(path), valid_pct=0.2, seed=42, label_func=is_cat, item_tfms=Resize(224))

`


