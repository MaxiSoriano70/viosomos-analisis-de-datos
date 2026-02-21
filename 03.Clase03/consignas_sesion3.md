# 🧹 Limpieza de Datos en Datasets Mineros

## 🎯 Objetivos
- Identificar y corregir errores de tipos de datos
- Detectar y eliminar duplicados
- Tratar valores inválidos o fuera de rango
- Limpiar datos categóricos (formato, errores tipográficos)

---

## 🧪 Paso 1: Cargar e Inspeccionar el Dataset Minero sin Limpiar

Ejecutá la celda para crear el dataset sintético y observá los problemas que tiene (tipos mezclados, valores raros, inconsistencias en mayúsculas, etc.)

**Ejercicios de las celdas vacías:**
- Calculá el **total de producción diaria** (`Daily_Production (tonnes)`)
- Calculá el **total de grado de mineral** (`Ore_Grade (%)`)

> ⚠️ ¿Podés hacerlo sin limpiar antes? ¿Qué pasa?

---

## 🔄 Paso 2: Problemas de Tipos de Datos

- Revisá los tipos de datos actuales con `.dtypes`
- Convertí las columnas numéricas al tipo correcto (los valores están almacenados como texto)

---

## 🧬 Paso 3: Manejar Duplicados y Datos Faltantes

- Eliminá filas duplicadas
- Identificá cuántos valores nulos hay por columna
- Eliminá filas donde falten datos críticos (`Mine_ID` u `Ore_Grade`)

---

## 🏷️ Paso 4: Estandarizar Datos Categóricos

- Normalizá `Mine_ID` → todo en mayúsculas, sin espacios
- Normalizá `Mineral` → primera letra en mayúscula, sin espacios extra
- Verificá los valores únicos resultantes con `.unique()`

---

## ⚠️ Paso 5: Manejar Outliers y Valores Fuera de Rango

- Filtrá los valores de `Ore_Grade (%)` que sean realistas (rango válido: **0% a 10%**)
- Mostrá el dataset resultante

---

## ✅ Dataset Final Limpio

- Eliminá cualquier duplicado restante
- Mostrá el resultado final listo para análisis
