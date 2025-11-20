#include <iostream>

using namespace std;

int add(int a,int b){
	
	return a+b;
}

int add(int a,int b,int c){
	
	return a+b+c;
}

int add(int a,int b,int c,int d){
	
	return a+b+c+d;
}

int main(){
	int result;
	
	result=add(4,1);
	
	cout<<result;
	return 0;
}