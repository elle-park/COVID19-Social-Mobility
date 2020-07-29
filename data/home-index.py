import csv
import json
import numpy as np
import pandas as pd

data = pd.read_csv("index-total.csv")

df = pd.DataFrame(data)

p=df['general_reduction'].max()
q=df['general_reduction'].min()

max_col = df[df['general_reduction'] == p]
min_col = df[df['general_reduction'] == q]
usa = df[df['location'] == "United States"]

column_names = ["location","mobility_before_distancing","mobility_after_distancing","general_reduction","median_reduction","median_seasonal_reduction","num_users","num_records"]
df2 = pd.DataFrame(columns=df.columns)
df2 = pd.DataFrame(usa)
df2 = df2.append(max_col)
df2 = df2.append(min_col)

j = df2.to_json(orient='records')
jsonfile = open('home-index.json', 'w')
jsonfile.write(j)
