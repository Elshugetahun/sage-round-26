#include <iostream>

using namespace std;

int main(){
	double weight;
	double height;
	cout<<"Enter Weight(kg): ";
	cin>>weight;
	cout<<"Enter Height(m): ";
	cin>>height;
	double bmi=weight/(height*height);
		cout<<bmi<<endl;
	
	if(bmi<18.5){
		cout<<"Under weight";
	}else if(bmi>18.5 || bmi<24.9){
		cout<<"Normal";
	}else if(bmi>25 || bmi <29.9){
		cout<<"Over weight";
	}else{
		cout<<"Obese";
	}
}