public class Main {
	
	public int addXY(int y, int x) {
		
	
		return x + y;
		
	}
	

	public static void main(String[] args) {
		
		System.out.println( "Hello, world" );
		
		Main n = new Main();
		
//		System.out.println( new Main().add3(5) );
		int x = 3;
		int y = 5;
		
		System.out.println(  x + " + " + y + " = " + n.addXY( x, y ) );		
		
	}
	
}