#include <iostream>

using namespace std;

string max(int a, int b){
	if(a>b){
	
	return to_string(a);
	}
	 else if(a<b){
		return to_string(b);
	}	 
	  else{
	 	 return "equal";
	  	 
	  }
}
int main(){
  
	int a; 
	cin>>a;
	int b;
	cin>>b;    
	
	
    cout<<max(a,b);
	
	
}
	



  
