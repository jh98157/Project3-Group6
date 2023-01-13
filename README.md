# Project3-Group6
This is the github repository for Project 3, Group 6.

# Superstition Wranglers

## Project Members
* Mitchell Boullt
* Caroline Christy
* Alison Faulkner
* Justin Ho
* Madison Lusane

---
## Purpose
To visually interpret select paranormal activity data in the United States and Canada; to allow user-driven interaction of datasets related to bigfoot sitings, ufo sitings, and haunted house reports.

----

## Libraries
* csv
* gmaps
* json
* pandas
* pprint
* requests
* time
* unicodedata
* unidecode

---- 

## About the Datasets
We used the following datasets, each of which were subjected to the ETL process (via SQL)prior to creating our visualizations:

* Bigfoot Data:
 https://data.world/timothyrenner/bfro-sightings-data/workspace/file?filename=bfro_locations.csv

 The bigfoot dataset started with 4,250 records and we were able to streamline it down to x records. We restricted the data in the bigfoot set to only include "Class A", or highly likely records; we also dropped null data and the number column that corresponded with each individual report since, for our purposes, this data was extraneous.
* UFO Data:
 https://data.world/timothyrenner/ufo-sightings/workspace/file?filename=nuforc_reports.csv

 In the UFO dataset, there were x original records and we reduced these to x records by removing null values and also excluded foreign countries (e.g., Germany and Turkey). We removed the "duration", "stats", "report link", "text", "posted", and "city location" columns, and retained "summary", "country", "city", "state", "shape", "date and time", "latitude" and 'longitude" columns.

* Haunted Houses Data:
 https://data.world/timothyrenner/haunted-places/workspace/file?filename=haunted_places.csv

 For the haunted houses dataset, we originally started with 10,992 records, and pared down to 731 records. We removed null values, as well as the columns for "description", "location", "state_abbrev", "city_longitude" and "city_latitude" (both were more precise but redundant) and we retained "state", "city", "longitude" and "latitude".
