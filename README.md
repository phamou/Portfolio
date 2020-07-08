# Hi, I'm Anh Vu! 

You can find on this page various programming and data analytics projects that I've worked on:
* [Dog Breed Image Classifier](https://phamou.github.io/Portfolio/#1-dog-breed--image-classifier)
* [Bulldozer Price Predictor](https://phamou.github.io/Portfolio/#2-bulldozer-price-predictor)
* [Heart Disease Predictor](https://phamou.github.io/Portfolio/#3-heart-disease-predictor)

You can also find me on [LinkedIn](https://www.linkedin.com/in/anh-vu-pham/) and [GitHub](https://github.com/phamou)! 

# [1. Dog Breed Image Classifier](https://github.com/phamou/Image-Dog-Breed-Classifier/blob/master/good-boy-identifier.ipynb)
## Overview
Ever saw a dog, took a snapshot of it and wondered what breed it was? I did... a few too many times. This notebook is to apply deep learning methods to identify the breed of these cute fluffs and present my results through data visualization.

## Technologies used:
* TensorFlow
* TensorHub (MobileNetV2)
* NumPy
* Pandas
* Matplotlib

### Result visualization 
![](/images/result_data.png)

### Custom picked images to test external cases
![](/images/custom_results.png)


# [2. Bulldozer Price Predictor](https://github.com/phamou/Bulldozer-Price-Predictor/blob/master/bulldozer-price-regression.ipynb)
## Overview
The goal is to predict the sale price of a particular piece of heavy equipment at auction day based on its usage, equipment type, and configuration using regression and time series analysis. 

The biggest challenge of this project was to convert all data types to numerical values in order to be used in the Random Forest Regressor model.

## Technologies used:
* Scikit-Learn
* NumPy
* Pandas
* Matplotlib

### Feature importance of price predictor model
![](/images/feature_importance_bulldozer.png)


# [3. Heart Disease Predictor](https://github.com/phamou/Heart-Disease-Predictor/blob/master/heart-disease-classification.ipynb)
## Overview
Predicting heart-disease using machine learning (Classification)
This notebook will look into using Python-based ML and data science libraries in an attempt to build a ML model capable of predicting whether someone has heart disease or not based on their medical record.

The problem will be divided in these different sections:

1. Problem definition
2. Data
3. Evaluation
4. Features 
5. Modelling 
6. Experimentation

This notebook features many visualization tools to understand possible correlations.

## Technologies used:
* Scikit-Learn
* NumPy
* Pandas
* Matplotlib

### Correlation matrix of all the features
![](/images/correlation_matrix_heart_predictor.png)

### Scatter plot of maximum heart rate and age
![](/images/age_mhr_correlation.png)

### Bar graph between sex and heart disease frequency
![](/images/heart_disease_sex_frequency.png)
