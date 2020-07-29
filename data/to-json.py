import pandas as pd
from itertools import groupby
from collections import OrderedDict
import json
import csv

csvfile = open('index-total.csv', 'r')
jsonfile = open('index-total.json', 'w')

fieldnames = ("location","mobility_before_distancing","mobility_after_distancing","general_reduction", "median_reduction", "median_seasonal_reduction", "num_users", "num_records")

reader = csv.DictReader(csvfile, fieldnames)
jsonfile.write("[")
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n'+",")

jsonfile.write("{" + "location" + ": null} ]")
