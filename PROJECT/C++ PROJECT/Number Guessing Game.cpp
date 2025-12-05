#include <iostream>
#include <cstdlib>
#include <ctime> 


using namespace std;

int main(){
	srand(time(0));	
	int x=rand() % 5;
	
	cout<<""<<endl;
	cout<<"    *NUMBER GUSSING GAME*"<<endl;
	cout<<""<<endl;
	cout<<"  *  ENTER NUMBR ONLY 0-5  *"<<endl;
	cout<<""<<endl;

	int y;
				
	for(int i=3;i>=1;i--){
			cout<<"Enter Number: ";
			cin>>y;
			cout<<""<<endl;
			if(y>5){
				cout<<"ONLY ENTER NUMBER 0-5!"<<endl;
				cout<<"     GAME OVER!"<<endl;
	cout<<""<<endl;
				break;
			}	
		if(y==x){
			cout<<""<<endl;
			cout<<"    **************"<<endl;
    		cout<<"    *   YOU WON  *" <<endl;
    		cout<<"    **************"<<endl;
    		cout<<""<<endl;
    		cout<<"   The Number Is: "<<x;
    		break;
		}else if(i==1){
			cout<<"     GAME OVER!"<<endl;
			cout<<"  The Number Is: "<<x;
		}else {
			cout<<"     TRY AGEAN"<<endl; 
			cout<<"YOU HAVE "<<i-1<<" CHANCES LEFT"<<endl;
			cout<<""<<endl;
		}
	} 	
	return 0;
}
	

 
             
 
 
 

				              		 