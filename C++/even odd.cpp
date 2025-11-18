#include <iostream>

using namespace std;

int main(){
	
	int num[7];
	int even=0;
	int odd=0;
	
	for(int i=0;i<7;i++){
		cin>>num[i];
	    if((num[i]%2)==0){
		even++;
    	}else{
		odd++;
        }
	}
    cout<<"Even: "<<even<<endl;
	cout<<"Odd: "<<odd<<endl;

}