#include <iostream>

using namespace std;

int main(){
	
	int num[7];
	int sum;
	for(int i=0;i<7;i++){
		cin>>num[i];
	}
	for(int i=0;i<7;i++){	
		sum=sum+num[i];
			
	}
	cout<<"The Largest Number is: "<<sum<<endl;


}