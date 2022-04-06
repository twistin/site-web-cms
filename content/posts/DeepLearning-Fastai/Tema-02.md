```python
def is_cat(x): return x[0].isupper()
dls= ImageDataLoaders.from_name_func(
   path, get_image_files(path), valid_pct=0.2, seed=42,
   label_func=is_cat, item_tfms=Resize(224))
```

- La función de etiquetado ( ```python def is_cat()``` )  devueve algo que es verdadero o falso. Este conjunto de datos también contiene la raza, de 37 razas diferentes de perros y gatos. En cada uno de los casos estamos tratando de predecir una categoría (un gato, un perro, un dálmata, un siamés, etc..)
> Cuando tratamos de predecir una categoría lo llamamos un **modelo de clasificación**. Sin embargo cuando se trata de predecir un número (una edad, una altura, etc..) llamamos a este **modelo regresión**. Estos son los dos tipos principales de modelos: clasificación y regresión.

- Porcentaje de validación (valid_pct) toma en este caso el 20% (0.2) de los datos, los aparta como un cubo separado, y luego cuando se entrena el modelo, éste no podrá ver esos datos en absoluto. Estos datos serán usados sólo para mostrar qué tan exacto es el modelo.
   Si se entrena durante mucho tiempo, sin datos suficientes, y un modelo con demasiados parámetros la exactitud empeorará. A esto se le llama **sobreajuste** (over-fitting).
   - La siguiente línea de código es:
  ```python
   learn = cnn_leaner(dls, resnet34, metrics=error_rate)
  ``` 
  
   donde creamos algo llamado 'learn'. Esto es algo que básicamente contiene los datos (dls), la arquitectura (resnet34) que es la función matemática que estás optimizando. En general *learn* trata de calcular qué parámetros hacen que esta función encaje mejor las etiquetas de los datos. Resnet34 es el nombre de una arquitectura en particular que es muy buena para problemas de computación visual. El nº 34 dice el número de capas que hay, cuanto más grande es más gasto computacional tendrá la máquina y es probable que se sobreajuste también, pero podría crear a la vez modelos más complejos. 
  
  - *metrics* es igual a la tasa de error. Esto es donde se listan las funciones que se quiere que se invoquen con nuestros datos de validación e imprimir después de cada *epoch*.
  - Un *epoch* es lo que llamamos cada una de las imágenes del conjunto de datos una vez. Luego de ver cada una de ellas del conjunto una vez imprimiremos alguna información de como lo está haciendo. Lo más importante que estamos mostrando es el resultado de llamar a esta métrica (metrics) que es una función que muestra qué porcentaje de nuestro conjunto de validación está siendo clasificado incorrectamente por nuestro *learn*.
  - Una métrica es una función que mide la calidad de las predicciones usando el conjunto de validación.
  - *Loss* no es necesariamente lo ismo que la métrica, necesitas una función de pérdida donde si se cambia los parámetros un poco hgacia arriba o un poco hacia abajo se puede ver si la pérdida mejora o empeora. Y resulta que la tasa de error o la exactitud no te dicen eso para nada porque si cambias los parámetros por una cantidad tan pequeña ninguna de las predicciones de perros se convertirán en predicciones de gatos y ninguna de las predicciones de gatos serán de perros. Por lo que las predicciones no cambian y la tasa de error no cambia. La pérdida y la métrica están etrechamente relacionadas. La métrica es lo que importa y la pérdida es lo que el ordenador usa como medida del rendimiento para decidir coo actualizar los parámetros.
  - El *sobreajuste*(overfitting) es como el punto clave de lo que se trata el aprendizaje automático.Es co o encontrar un mpodelo que ajusta los datos, no solo los datos que estamos entrenando, si no aquellos que el algoritmo entrenado no ha visto con anterioridad. El sobre ajuste aparece cuando el modelo está, básicamente, 'engañando'. Un modelo puede engañar diciendo 'oh , ya he visto esta foto anteriormente y recuerdo que es la foto de un gato' podría no haber aprendido cómo son los gatos en general si no que recuerda que las imágenes 1,4 y 8 son gatos y la 2,3 y 5 perros y no ha aprendido nada de cómo realmente son. Es esa clase de engaños que tratamos de evitar. No queremos de memorizar nuestro conjunto de datos particular. Separamos nuestro conjunto de validación y nos aseguramos que nuestro modelo no lo vea durante el entrenamiento. deberíamos separar un ercer grupo de datos, llamado conjunto de prueba que no se use ni para entrenar ni para las métricas. realmente no lo miras hasta que el proyecto esté terminado. Es lo que se usa en las plataformas de competición como Kaggle.
















