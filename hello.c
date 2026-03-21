#include <stdio.h>

int main()
{
	long double a = 0;
	long double b = 0;
	char c;
	long double resultat = 0;
	int premiertour = 1;

	printf("donne moi un calcul <3 : ");

	while ( c != '=')
	{
		if (premiertour)
		{
			scanf("%Lf %c", &a, &c);
			premiertour = 0;
		}
		else
		{
			scanf(" %c", &c);
			a = resultat;
		}

	

		if (c != '!')
		{
			scanf("%Lf", &b);
		}

		switch (c)
		{
			case '+':
			{
				resultat = a + b;
				break;
			}
			case '-':
			{
				resultat = a - b;
				break;
			}
			case '/':
			{
				resultat = a / b;
				break;
			}
			case '*':
			{
				resultat = a * b;
				break;
			}
			case '%':
			{
				resultat = (int)a % (int)b;
				break;
			}
			case '!':
			{
				long double y = 1;
				int ai = (int)a;
				if (ai == 0)
					resultat = 1;
				else
				{
					for (int i = 1; i <= ai; i++)
						y *= i;
					resultat = y;
				}
				break;
			}
			case '^':
			{
				long double y = 1;
				for (int i = 0; i < (int)b; i++)
					y *= a;
				resultat = y;
				break;
			}
			case 'g':
			{
				int max = (a > b) ? (int)a : (int)b;
				for (int i = 1; i < max; i++)
					if ((int)a % i == 0 && (int)b % i == 0)
						resultat = i;
				break;
			}
			case 'p':
			{
				int min = (a < b) ? (int)a : (int)b;
				for (int i = min; i > 1; i--)
					if ((int)a % i == 0 && (int)b % i == 0)
					{
						resultat = i;
						break;
					}
				break;
			}
		}
		a = resultat;
	
	}
	printf ("%Lf", resultat);
}