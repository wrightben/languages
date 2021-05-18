public class Hello {
	
	public int addXY(int y, int x) {
		
	
		return x + y;
		
	}
	

	public static void main(String[] args) {
		
		System.out.println( "Hello, world" );
		
		Hello h = new Hello();
		
//		System.out.println( new Main().add3(5) );
		int x = 3;
		int y = 5;
		
		System.out.println(  x + " + " + y + " = " + h.addXY( x, y ) );
		
	}
	
}