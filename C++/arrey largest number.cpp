#include <iostream>

using namespace std;

int main(){
	
	int num[7];
	int large=0;
	for(int i=0;i<7;i++){
		cin>>num[i];
	}
	for(int i=0;i<7;i++){
	if(large<num[i]){
		large=num[i];
	}
		
	}
	cout<<"The Largest Number is: "<<large<<endl;


}