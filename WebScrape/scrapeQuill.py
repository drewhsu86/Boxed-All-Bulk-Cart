# backwards syntax from javascript
# urllib is library from python
# bs4 is installed with pip
import random
import datetime
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

date = datetime.datetime.now()

localDate = '-'.join(date.strftime('%x').split('/'))
localTime = date.strftime('%X')

print('Running on: ' + localDate + ' , ' + localTime)
print('Enter a product query from quill.com: ')

# use a url with thumbnails from quill.com
my_url = input(
    "Paste in a quill.com link that has thumbnails or use this example page: \n https://www.quill.com/school-products/cbu/36.html \n")
if len(my_url) == 0:
    my_url = "https://www.quill.com/school-products/cbu/36.html"

category = input('Type in the category (lower case): \n')
if len(category) == 0:
    category = 'school & office'
subcategory = input('Type in the subcategory (lower case): \n')
if len(subcategory) == 0:
    subcategory = 'paper & printing'

print('Using URL: ' + my_url)

# download the webpage from the url
uClient = uReq(my_url)
page_html = uClient.read()

# close the connection
uClient.close()

# beautiful soup parses the html or else its huge
page_soup = soup(page_html, "html.parser")

prodThumbs = page_soup.findAll("li", {"class": "item_ph"})

print('======================================')
print(str(len(prodThumbs)) + ' results found!')

print('======================================')
print('Starting for loop!')

# open a json file that holds an array
fileName = 'products_'+localDate+'_'+localTime+'.json'
outFile = open(fileName, 'w')
outFile.write('[')
outFile.write('\n')

# prodThumbs for loop
i = 0
while i < len(prodThumbs):
    print('======================================')
    print('Iteration: ' + str(i+1))

    # name
    titleAnchor = prodThumbs[i].find("a", {"class": "desc2 scTrack pfm"})
    title = titleAnchor['title']
    # we have to prevent double quotes from showing up
    title = "''".join(title.split('"'))

    # image
    imageTag = prodThumbs[i].find("img")
    image = imageTag['src']

    # need to remove the // because of commenting syntax
    image = ''.join(image.split('//'))

    # price
    priceSpan = prodThumbs[i].find("span", {"class": "priceupdate"})
    try:
        price = priceSpan.contents[0]
        price = price.split('$')[1]
    except:
        price = str(random.randint(0, 10000)/100)

    # rating
    ratingSpan = prodThumbs[i].find("span", {"id": "productRating"})
    try:
        rating = ratingSpan.contents[0]
    except:
        rating = 3

    # stock
    stock = random.randint(0, 1000)

    # description
    titleWords = title.split(' ')
    if stock > 0:
        description = 'In stock!'
    else:
        description = 'Out of stock!'

    # print everything we want to write into our json
    print('name: ', title)
    print('image: ', image)
    print('price: ' + price)
    print('rating: ' + str(rating))
    print('brand: ' + title.split(' ')[0])
    print('description: ' + description)
    print('stock: ' + str(stock))

    # use the prints as a blueprint to write the json
    # following our express backend schema for products
    outFile.write('{')
    outFile.write('\n')

    outFile.write('"name":"' + title + '",')
    outFile.write('\n')

    outFile.write('"images":["' + image + '"],')
    outFile.write('\n')

    outFile.write('"price":"' + price.split('$')[0] + '",')
    outFile.write('\n')

    outFile.write('"rating":' + str(rating) + ',')
    outFile.write('\n')

    outFile.write('"stock":' + str(stock) + ',')
    outFile.write('\n')

    outFile.write('"description":"' + description + '",')
    outFile.write('\n')

    outFile.write('"brands":"' + title.split(' ')[0] + '",')
    outFile.write('\n')

    outFile.write('"categories":"' + category + '",')
    outFile.write('\n')

    outFile.write('"subcategories":"' + subcategory + '"')
    outFile.write('\n')

    outFile.write('},')
    outFile.write('\n')

    # iterate
    i = i + 1

# after the while loop is done close the array
outFile.write(']')
