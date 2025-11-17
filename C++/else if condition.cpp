#include <iostream>

using namespace std;

int main(){
	int age=20;
	
	if(age>=18){
		cout<<"Adult";
	}else if(age>=13){
		cout<<"Teen Age";
	}else{
		cout<<"Child";
	}
	return 0;
}