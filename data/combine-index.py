import csv
import numpy as np
import pandas as pd

data_state = pd.read_csv("index-state.csv")
data_city = pd.read_csv("index-city.csv")

df = data_state.append(data_city)

#print(out)
data_state.to_csv("index_state_latest.csv", index=False)
data_city.to_csv("index_city_latest.csv", index=False)
df.to_csv("index_compiled.csv", index=False)
