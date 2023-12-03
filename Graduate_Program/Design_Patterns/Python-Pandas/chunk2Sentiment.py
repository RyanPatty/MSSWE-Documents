#~300 words after chunked

#import pandas library
import pandas as pd

#create a data object with the data from excel file in desktop filepath
data = pd.read_excel('C:/Users/Astro/Desktop/reduce2.xlsx')

data = data[data['Review'].str.contains('fix|bug|lost|add|comp|better|problem', case=False)]

#save data to a new excel file
data.to_excel('C:/Users/Astro/Desktop/second-chunk.xlsx', index=False)

#run a sentiment analysis on the data
from textblob import TextBlob
data['polarity'] = data['Review'].apply(lambda x: TextBlob(x).sentiment.polarity)
data['subjectivity'] = data['Review'].apply(lambda x: TextBlob(x).sentiment.subjectivity)

#save the sentiment analysis data to a new excel file
data.to_excel('C:/Users/Astro/Desktop/second-chunk-analysis.xlsx', index=False)



#display the data
print(data)