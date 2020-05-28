import csv
import json
import pandas as pd

# Import the SMIData.csv data: smi
#smi = pd.read_csv('SMIData.csv')

#colnames = ['date', 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'NYC', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'USA', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY']
#data = pd.read_csv('SMIData.csv', names=colnames)

data = pd.read_csv("SMIData.csv")
dict_of_lists = {}

# extract data's column as dictionary
for col_name in data.columns:
    temp = data[col_name].tolist()
    dict_of_lists[col_name] = temp

# write output to csv file with rows of col
with open('output.csv', 'w', newline="") as csv_file:
    writer = csv.writer(csv_file)
    for key, value in dict_of_lists.items():
       writer.writerow([key, value])

# Serializing json
json_object = json.dumps(dict_of_lists, indent = 4)

# Writing to sample.json
with open("output.json", "w") as outfile:
    outfile.write(json_object)
