---
layout: default
# antes post
title:  "Versión inicial de Overflow-Synth"
date:   2020-08-25 15:20:31 +0200
categories: overflow-synth
---

Ya está disponible la versión inicial de mi proyecto de sintetizador de ruidos:
Overflow-Synth.

Link de descarga: [overflow-synth-1.0](/downloads/overflow-synth-1.0.jar)

### Funcionamiento básico

Se basa en aritmetica modular de múltiples ondas base y un limite.

Todas las ondas tienen dos estados: arriba y abajo, y cada estado dura la mitad
del período de la onda.

Se analiza cual de todas las ondas activas está más cerca de cambiar de estado
y se obtiene cuanto tiempo tendría que pasar para que cambiara de estado.
Si el tiempo es menor que el límite, se espera ese tiempo. Sin embargo si es 
mayor que el límite, el tiempo que tendría que pasar se comprime a solo 
tiempo mod limite.

Las ondas pueden modificar su período, su volumen y su forma a cuatro formas
básicas: Cuadrada, sinusoidal, triangular y sierra.

El límite también puede modificar su duración.

También se puede modificar el volumen total y dos delays.

### Delays

FDelay es el factor de duración, el sonido se multiplica por su valor y se
hace más rápido y agudo o más lento y grave.

WDelay es retraso de espera. Puedes hacer que cada vez que se cambia de estado
en una onda se espere un tiempo extra, deformando así el sonido bastante.


### Ideas de futuro

En el futuro se añadirá alguna función que modifique la frecuencia de los
ruidos y sonidos sin modificar su duración, permitiendo así hacer diferentes
"notas".
