#combine the chunkies
#import pandas library
import pandas as pd

#create a data object with the data from excel file in desktop filepath
data = pd.read_excel('C:/Users/Astro/Desktop/data/first-chunk-analysis.xlsx')

data2 = pd.read_excel('C:/Users/Astro/Desktop/data/second-chunk-analysis.xlsx')

data3 = pd.read_excel('C:/Users/Astro/Desktop/data/third-chunk-analysis.xlsx')

#combine data from all 3 chunks into one excel file
data4 = pd.concat([data, data2, data3])

#save data to a new excel file
data4.to_excel('C:/Users/Astro/Desktop/data/combined-chunks.xlsx', index=False)

#display the data
print(data4)