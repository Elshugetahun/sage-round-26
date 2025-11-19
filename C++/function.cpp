#include <iostream>

using namespace std;

double sum(double a,double b){
	double result;
	result=a+b;
	
	return result;
	
}

int main(){
	
	double a;
	cout<<"Enter Number: ";
	cin>>a;
	double b;
	cout<<"Enter Number: ";
	cin>>b;	
	cout<<"The Sum is: "<<sum(a,b);
}