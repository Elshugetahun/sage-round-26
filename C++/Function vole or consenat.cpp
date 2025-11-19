#include <iostream>

using namespace std;

string v_or_c(char a){
	if(a=='a'||a=='e'|| a=='i'|| a=='o'||a=='u'||a=='A'||a=='E'|| a=='I'||a=='O'||a=='U'){
		
		return "voile";
		
	}else
	  
        return "concenant";
}

int main(){
	
	char a;
	cin>>a;

	
	cout<<v_or_c(a);

}      