import csv
import json
import pandas as pd

data = pd.read_csv("SMI-State-Data.csv")
dict_of_lists = {}

# extract data's column as dictionary
for col_name in data.columns:
    temp = data[col_name].tolist()
    dict_of_lists[col_name] = temp

# write output to csv file with rows of col
with open('output-state.csv', 'w', newline="") as csv_file:
    writer = csv.writer(csv_file)
    for key, value in dict_of_lists.items():
       writer.writerow([key, value])
