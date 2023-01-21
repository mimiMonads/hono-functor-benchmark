
### System


- OS: Debian GNU/Linux 11 (bullseye) x86_64 
- Kernel: 5.10.0-20-amd64 
- CPU: AMD Ryzen 7 3750H with Radeon Vega Mobile Gfx (8) @ 2.300GHz 
- GPU: AMD ATI 05:00.0 Picasso 
- Memory: 4607MiB / 15771MiB 

### Responses per second

| Test  | endo  | hono  | dif  | r-dif  |
|---------- |---------- |---------- |---------- |---------- |
| "/" | <font color='green'> 39.10K </font>  | 35.79K | 3.31K | 9.25% |
| nested | <font color='green'> 37.77K </font> | 34.55K | 3.5K | 9.32% |
| 1 P | <font color='green'> 36.74K </font> | 34.27K | 2.47K | 7.2% |
| 3 P | <font color='green'> 36.49K </font> | 33.29K | 3.2K | 9.6% |
| 1 Q | <font color='green'> 35.34K </font> | 31.31K | 4.03K | 12.6%|
| Read | <font color='green'> 17.37K </font> | 16.59K | 780 | 4.69% |
| Total| <font color='green'> 202.31K </font> | 185.8K | 16.51K | 8.8% |

 - P = parameter
 - Q = query
 
 Note that:
 - I intentionally avoided 1 Q 1 P , 3 Q , 3 Q 3 P, because the difference is too substantial and I think something is wrong. 


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
oha  -z 100s -c 50 'http://127.0.0.1:8080/q?e=1' ;
oha  -z 100s -c 50 'http://127.0.0.1:8080/json'

```

