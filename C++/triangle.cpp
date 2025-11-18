#include <iostream>

using namespace std;

int main(){
	
	for(int i=1;i<=5;i++){
		for(int j=4;j>=i;j--){
			cout<<" ";
		}
			for(int x=1;x<=i;x++){
			cout<<"*";
		}
		for(int j=1;j<i;j++){
			cout<<"*";
		}
			for(int x=4;x>=i;x--){
			cout<<" ";
		}
		cout<<endl;
	}
}
	  
	  
		


