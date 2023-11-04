import requests
import os
from bs4 import BeautifulSoup

TEXT_FILE_NAME = "data.csv"



try:
    wunder = requests.get("https://www.animehindiindia.in/sitemap.xml")
    parcala = BeautifulSoup(wunder.content, "xml")



    with open(TEXT_FILE_NAME, "a") as out_file:
            loc_tags = parcala.find_all('loc')
            out_file.writelines("URL,Date\n")

            for loc in loc_tags:
                # urls_from_xml.append(loc.get_text()) 
                ALL_CONTENT = (loc.get_text()+',\n') 
            
                print(ALL_CONTENT)
                out_file.writelines(loc for loc in ALL_CONTENT)



    


except Exception as e: 
        print("ERROR........")  