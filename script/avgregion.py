import csv
import json
import numpy as np
import pandas as pd


data = pd.read_csv("SMI-State-Data.csv")
dict_of_lists = {}

df = pd.DataFrame(data)
df['Dates'] = pd.to_datetime(df['Dates'])
start_date = '2019-11-01'
end_date = '2020-04-27'
mask = (df['Dates'] > start_date) & (df['Dates'] <= end_date)
df = df.loc[mask]

ne = ['ME', 'VT', 'NH', 'MA', 'RI', 'CT', 'NY', 'PA', 'NJ', 'DE']
mw = ['MI', 'OH', 'IN', 'KY', 'MN', 'WI', 'IA', 'IL', 'MO']
central = ['MT', 'ID', 'WY', 'ND', 'SD', 'NE', 'KS', 'OK', 'AR', 'MS', 'LA', 'TX', 'NM', 'CO', 'UT', 'NV']
south = ['MD', 'DC', 'WV', 'VA', 'TN', 'NC', 'SC', 'GA', 'AL', 'FL']
west = ['WA', 'OR', 'CA', 'AZ', ' AK', 'HI']

df['avg_ne'] = df[ne].mean(axis=1)
df['avg_mw'] = df[mw].mean(axis=1)
df['avg_central'] = df[central].mean(axis=1)
df['avg_south'] = df[south].mean(axis=1)
df['avg_west'] = df[west].mean(axis=1)

# extract data's column as dictionary
for col_name in df.columns:
    temp = df[col_name].tolist()
    dict_of_lists[col_name] = temp

# write output to csv file with rows of col
with open('output-region.csv', 'w', newline="") as csv_file:
    writer = csv.writer(csv_file)
    for key, value in dict_of_lists.items():
       writer.writerow([key, value])

#print(df)
