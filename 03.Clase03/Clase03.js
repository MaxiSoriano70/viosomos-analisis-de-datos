// import pandas as pd
/**
 * Es una convención (estándar) llamar "pd" a pandas al importarlo.
 *
 * ─────────────────────────────────────────────
 * LIMPIAR DATOS DE UNA COLUMNA
 * ─────────────────────────────────────────────
 * Elimina el símbolo $ de cada valor en la columna Revenue:
 *   sales['Revenue'] = sales['Revenue'].str.strip('$')
 *
 * ─────────────────────────────────────────────
 * CONVERTIR A CATEGORÍA
 * ─────────────────────────────────────────────
 *   df["marriage_status"] = df["marriage_status"].astype('category')
 *
 * ─────────────────────────────────────────────
 * RESUMEN ESTADÍSTICO
 * ─────────────────────────────────────────────
 *   df.describe()   ← (era "describre", faltaba asignar en strip)
 *
 * ─────────────────────────────────────────────
 * FILTRAR POR FECHA
 * ─────────────────────────────────────────────
 *   import datetime as dt
 *   today_date = dt.date.today()
 *   user_signups[user_signups['subscription_date'] > dt.date.today()]
 *
 * ─────────────────────────────────────────────
 * ELIMINAR DATOS FUERA DE RANGO
 * ─────────────────────────────────────────────
 * Opción 1 – Filtrar filas válidas:
 *   movies = movies[movies['avg_rating'] <= 5]   ← (era "< =" con espacio, no es válido)
 *
 * Opción 2 – Eliminar filas con drop():
 *   movies.drop(movies[movies['avg_rating'] > 5].index, inplace=True)
 *
 * Opción 3 – Limitar al valor máximo (capping):
 *   movies.loc[movies['avg_rating'] > 5, 'avg_rating'] = 5
 *                        ↑ faltaba cerrar la comilla: 'avg_rating'
 *
 * ─────────────────────────────────────────────
 * ENCONTRAR DUPLICADOS
 * ─────────────────────────────────────────────
 *   duplicates = height_weight.duplicated()   ← (era "duplicate()" sin la 'd')
 *   print(duplicates)                         ← devuelve una Serie de True/False
 *
 *   height_weight[duplicates]                 ← muestra solo las filas duplicadas
 *
 * Parámetros de .duplicated():
 *   subset  → lista de columnas a revisar (ej: ['first_name', 'last_name'])
 *   keep    → 'first' conserva la primera aparición
 *              'last'  conserva la última
 *              False   marca TODAS las ocurrencias como duplicadas
 *   inplace → no existe en duplicated(); para eliminar usar .drop_duplicates(inplace=True)
 *
 * Ejemplo con subset y keep=False (ver TODOS los duplicados):
 *   duplicates = height_weight.duplicated(subset=['first_name', 'last_name'], keep=False)
 *   height_weight[duplicates].sort_values(by='first_name')
 *
 * ─────────────────────────────────────────────
 * TRATAR DUPLICADOS CON groupby() + agg()
 * ─────────────────────────────────────────────
 * Cuando hay filas "casi duplicadas" (mismo nombre y dirección pero distinta
 * altura/peso), en lugar de eliminar una, las COMBINAMOS aplicando una
 * función de agregación por grupo:
 *
 *   column_names = ['first_name', 'last_name', 'address']  # columnas que definen unicidad
 *   summaries    = {'height': 'max', 'weight': 'mean'}     # qué hacer con las numéricas
 *
 *   height_weight = (
 *       height_weight
 *       .groupby(by=column_names)   # agrupa filas con los mismos nombres/dirección
 *       .agg(summaries)             # height → queda el máximo, weight → queda el promedio
 *       .reset_index()              # vuelve las columnas agrupadas a columnas normales
 *   )
 *
 * Resultado: una sola fila por persona, sin perder información útil.
 */