import csv
import json
import numpy as np
import pandas as pd

data = pd.read_csv("SMI-City-Data.csv")
dict_of_lists = {}

df = pd.DataFrame(data)
df['Dates'] = pd.to_datetime(df['Dates'])
start_date = '2019-11-01'
end_date = '2020-04-27'
mask = (df['Dates'] > start_date) & (df['Dates'] <= end_date)
df = df.loc[mask]

# extract data's column as dictionary
for col_name in df.columns:
    temp = df[col_name].tolist()
    dict_of_lists[col_name] = temp

# write output to csv file with rows of col
with open('output-city.csv', 'w', newline="") as csv_file:
    writer = csv.writer(csv_file)
    for key, value in dict_of_lists.items():
       writer.writerow([key, value])
