import csv
import numpy as np
import pandas as pd

data_state = pd.read_csv("longitudinal-state-2020-06-29.csv")
data_city = pd.read_csv("longitudinal-city-2020-06-29.csv")

df = pd.DataFrame(data_state)
df2 = pd.DataFrame(data_city)

ne = ['ME', 'VT', 'NH', 'MA', 'RI', 'CT', 'NY', 'PA', 'NJ', 'DE', 'MD', 'DC']
mw = ['MI', 'OH', 'IN', 'KY', 'MN', 'WI', 'IA', 'IL', 'MO']
central = ['MT', 'ID', 'WY', 'ND', 'SD', 'NE', 'KS', 'OK', 'AR', 'MS', 'NM', 'CO', 'UT', 'NV']
south = ['LA', 'TX', 'WV', 'VA', 'TN', 'NC', 'SC', 'GA', 'AL', 'FL']
west = ['WA', 'OR', 'CA', 'AZ', 'AK', 'HI']
carib = ['PR', 'VI']

df['avg_USA'] = df.mean(axis=1)
df['Northeast'] = df[ne].mean(axis=1)
df['Midwest'] = df[mw].mean(axis=1)
df['Central'] = df[central].mean(axis=1)
df['South'] = df[south].mean(axis=1)
df['West'] = df[west].mean(axis=1)
df['Caribbean'] = df[carib].mean(axis=1)

for col_name in df2.columns:
    df[col_name.replace("_", " ")] = df2[col_name]

df.to_csv("longitudinal-total-2020-06-29.csv", index=False)
#print(df.index)
#df.iloc[0].transpose().to_csv("citylist.csv", index=True)
