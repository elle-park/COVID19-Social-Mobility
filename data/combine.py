import csv
import numpy as np
import pandas as pd

data_state = pd.read_csv("longitudinal-state-2020-06-22.csv")
data_city = pd.read_csv("longitudinal-city-2020-06-22.csv")

df = pd.DataFrame(data_state)
df2 = pd.DataFrame(data_city)

ne = ['ME', 'VT', 'NH', 'MA', 'RI', 'CT', 'NY', 'PA', 'NJ', 'DE']
mw = ['MI', 'OH', 'IN', 'KY', 'MN', 'WI', 'IA', 'IL', 'MO']
central = ['MT', 'ID', 'WY', 'ND', 'SD', 'NE', 'KS', 'OK', 'AR', 'MS', 'LA', 'TX', 'NM', 'CO', 'UT', 'NV']
south = ['MD', 'DC', 'WV', 'VA', 'TN', 'NC', 'SC', 'GA', 'AL', 'FL']
west = ['WA', 'OR', 'CA', 'AZ', 'AK', 'HI']

df['avg_USA'] = df.mean(axis=1)
df['avg_Northeast'] = df[ne].mean(axis=1)
df['avg_Midwest'] = df[mw].mean(axis=1)
df['avg_Central'] = df[central].mean(axis=1)
df['avg_South'] = df[south].mean(axis=1)
df['avg_West'] = df[west].mean(axis=1)

for col_name in df2.columns:
    df[col_name] = df2[col_name]

df.to_csv("output.csv", index=False)
print(df)
