# COVID19-Social-Mobility Guide to Maintenance

## How to update data
There are 3 Python scripts in the *data* folder:
- generate-latest.py
- heatmap.py
- home-index.py

generate-latest.py is the only one out of the three that requires some modification.
See the 4 uploaded file naming conventions in this section:
'''python
data_state_l = pd.read_csv("state-longi-[DATE].csv")
data_city_l = pd.read_csv("city-longi-[DATE].csv")
data_state_i = pd.read_csv("state-index-[DATE].csv")
data_city_i = pd.read_csv("city-index-[DATE].csv")
'''

Replace *[DATE]* following the last updated file name and run the script to generate newest
data files, named by following:

'''python
data_state_l.to_csv("longitudinal_state_latest.csv", index=False)
data_city_l.to_csv("longitudinal_city_latest.csv", index=False)
df_l.to_csv("longitudinal_compiled.csv", index=False)
data_state_i.to_csv("index_state_latest.csv", index=False)
data_city_i.to_csv("index_city_latest.csv", index=False)
df_i.to_csv("index_compiled.csv", index=False)
'''
Do not change the names of these files, as that will affect the linked data URLs for other pages!
Compiled means regional data is included along with both state and city data.

## Checklist before hosting the website:
- [ ] Google Maps API key created under different account for billing
- [ ] Google Analytics account created and embedded
- [ ] Have new data be updated to this GitHub account
