#include <iostream>

using namespace std;

int main(){
	
	int day=4;
	
	switch(day){
		case 1:
			cout<<"Monday";
			break;
		case 2:
			cout<<"Tusday";
			break;
		case 3:
			cout<<"Wensday";
			break;
		case 4:
			cout<<"Tursday";
			break;
		case 5:
			cout<<"Friday";
			break;
		case 6:
			cout<<"Satrday";
			break;
		case 7:
			cout<<"Sunday";
			break;
		default:
		 cout<<"No Day";
	}
}