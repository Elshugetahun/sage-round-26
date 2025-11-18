#include <iostream>

using namespace std;

int main(){
	
	int num1[3] ={12,34,5};
	int num2[3] ={34,1,5};
	int num3[3] ={5,78,9};
	int sumofnum1, sumofnum2,sumofnum3;

	
	for(int i=0;i<3;i++){
		sumofnum1=sumofnum1+num1[i];
	}
	for(int i=0;i<3;i++){
		sumofnum2=sumofnum1+num2[i];
	}
	for(int i=0;i<3;i++){
		sumofnum3=sumofnum3+num3[i];
	}


cout<<"sum of num 1: "<<sumofnum1<<endl;
cout<<"sum of num 2: "<<sumofnum2<<endl;
cout<<"sum of num 3: "<<sumofnum3<<endl;


}