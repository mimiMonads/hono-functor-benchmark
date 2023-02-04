
### Repository


[Endofunctor](https://github.com/mimiMonads/functor)

### System


- OS: Debian GNU/Linux 11 (bullseye) x86_64 
- Kernel: 5.10.0-20-amd64 
- CPU: AMD Ryzen 7 3750H with Radeon Vega Mobile Gfx (8) @ 2.300GHz 
- GPU: AMD ATI 05:00.0 Picasso 
- Memory: 4607MiB / 15771MiB 

### Responses per second

| Test  | endo  | hono  | dif  | r-dif  |
|---------- |---------- |---------- |---------- |---------- |
| "/" | <font color='green'> 40.1k </font>  | 37.0K | 3.1K | 8.38% |
| nested | <font color='green'> 39.0k </font> | 35.6K | 3.4K | 9.55% |
| 1 P | <font color='green'> 39.4K </font> | 35.3K | 4.1K | 11.61% |
| 3 P | <font color='green'> 38.4K </font> | 33.7K | 4.7K | 13.95% |
| 1 Q | <font color='green'> 38.9K </font> | 32.0K | 6.9K | 21.56%|
| 3 Q | <font color='green'> 38.5K </font> | 26.5K | 11.8K | 44.53%|
| 1Q 1P | <font color='green'> 38.2K </font> | 30.8K | 7.4K | 24.03%|
| 3Q 3P| <font color='green'> 37.2K </font> | 25.3K | 11.9K | 47.04%|
| Total| <font color='green'> 309.5K </font> | 256.2K | 53.3K | 20.80% |

 - P = parameter
 - Q = query
 



### Method

To avoid variations:

 - The tests are 100 seconds long
 - One after the other
 - It must be completely idle before starting
 
It takes 10 minutes.

```bash 
deno run --allow-read --allow-net ./functor/main.ts 
deno run --allow-all  --allow-net ./hono/main.ts

```



``` bash
oha  -z 100s -c 50 'http://127.0.0.1:8080/' ;
oha  -z 100s -c 50 'http://127.0.0.1:8080/a/b/c/d/e/f/g/' ;
oha  -z 100s -c 50 'http://127.0.0.1:8080/test/hello' ;
oha  -z 100s -c 50 'http://127.0.0.1:8080/test/mul/1/2/3' ;
oha  -z 100s -c 50 'http://127.0.0.1:8080/q?d=1' ;
oha  -z 100s -c 50 'http://127.0.0.1:8080/multi?d=1&e=2&f=3' ;
oha  -z 100s -c 50 'http://127.0.0.1:8080/test/both/1?d=2' ;
oha  -z 100s -c 50 'http://127.0.0.1:8080/both/test/1/2/3?d=4&e=5&f=6';

```



