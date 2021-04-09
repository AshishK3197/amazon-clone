export const initialState = {
	basket: [
		// {
		// 	id: "12321431",
		// 	title: "Dwandv: The Battle for the Gate",
		// 	price: 279,
		// 	rating: 5,
		// 	image:
		// 		"data:image/webp;base64,UklGRhodAABXRUJQVlA4IA4dAAAQgACdASqtAAoBPwVenkemoqGmMPp8+NggiewAuzpeWN6+5yfYbpoQLDHs4en3/CdOT07eYnzV/TD/bN+f9DDpi/7X/2/SO06yXI2a8+2WgUG3l3D/vPGFQt+7eG+nX0BvKM8An7bvwfQaUhzHXA+v65sn7SxMaoppMo9KQBFTiU6WKDKrC0ktjj6eycvF9usYmVbjpuiSpTVFN+gVGC5OPhEAOCtW+UvxD8XEbfKBsmi+AobepiZZhMGkKuUf/x0EpHnIgti6bz4rU7ajconkOrKrY3pAPoP0qo28H2c+Oa7zStXEShCJjqursSs7uJMmCZyfrPCDaC4wcNTZpij3zf2Og8yYdQvcc3Wz/rnQdcd2SwjHj9gkT6SVSjHvE9efqOFPxVuXvoMowvDu9ONaGwqw7+pGa1MVpQK3SSIcP+yfBoeEDze9sQanvdxgJvt13dMAMoqyISAKLZY82djlLMH4DzNaADQf6YzkE08AXHuRbyboF7zYHIUZrigiz37KWwXYGZTywSrV2LoWdR9tQdR6PPw/tjMZsyuDDDcqzec3KoOAKbunxNkNRSzxv03nkL/K1HChii73E05i6BLJ3rJhsWx05I/YgOujGUYWQjI/ZPpD7iY3hcPLWfE4uDEagXPuYrrAlXUv0V6pzp23Px+zZt2Hn6F0Ang0NlrV2eAhykqVIyEzT4Gwvb2BwwThN0jaPGanKhMVworBN42JrlD0bTBPrqkDUjU+0L0dRawmG1Jb3Uc/P9sSLOp7GMwMz8H8YOvK+B4heFJkPff3YSD9IxwPvqP9XRp9D45N7ObAOzk1SutZ1VVeao5VNIgL4+ciwbBeNArGmTsp+DBmUQSFF7nBOmyBb+2eqDd6iPw0kVnjbVxIgjtDrZHT/8k8FGshaJlS43f1LpfWxHKyoqnRVtI+Yu4xsnnBFmy/uZg2Dpef9S0a8Xc3vQiuysBYdvwd0CkPXLUBuk2+62z5Qftpqpszvq9aCgLlEltgE9rhF6/+mNeTusLqF7+ZnmtpuSTji5x0BZCh7VUULcc+7V2oc63GZ/sKG86AdVsIMzpgvSNoSwrl3J0raJf6QzHI0jpb1DOYfAKSUa6uil+/FIqWmxZenvzH+La9mUZnUZ5sFcD4G7fRXL69oUetOXxm0SnupUe4T6bpM6KQ75OevMz0ACJ2BhPBYK6xr9J+pvGjVSWjH8UP/p0srJ3S3vC/oMescTm06CYP/c3cB2xka8TTeTi3tVOQRqBtki+Mglw8zjTHgc9aqX/UZwrkUZ+9MPtansP+OOQo8kJtztlkiyv1MEmW3VTd6JVoqaf5/McprxRFTUzQqVl6rATWr/N6XAP9m4sdLQ3OF1sdsbwHl4rLINnh6N+gAP0arlb1kHzPs/H5fwL0iD4Y1JLi0kcp5We6fb7tjrdGfVARJ559fUZJZ2SGVT/a8+fhY0a+9HtaXRv4KVIA2vJbAmaAkHc+89vnqAu3J+1yog2Ujyktf+z9/mQNtSKMOOYNc3hVaI8UTSzr3ESOHT8B/irdaYmkGFY0AZ9hOdJnOiwTduUzsCLmvZsVzfj7qsVNbaNr4xIRvaLCweXD32IzgX8HRb8SB+UrFPAH7BXvCgkSF+7fZv55mGV5xPJF0yd+gCQG/ecJ8g3WvOtvabw74uryuMc+gBCpnfXMd4u7rcKveUnukzOhcnUf1yAra+6rQEcGcmrTxCufdfcHXMhtufLRsBfsJplOPoicWYVcBhW1T6/Nv+bA4KabVOpYEZ+zru0XWw2k6zJG9JI+higA8A53gb3of4PgnRDJPNMQnF5dkezj3gWY4TX77rzVWi5UY2Tw6CcAUGOl6wa5qdsCeicItUKGjjcuRFL0EvyMW48SdQ1YgsNrw2ucYXkbZawn44ulEDmF4opv8euwm35NbzljzKKLGpp805n+EBUh/R1b0VX3u1zSJH4i+u3m606VuAqC2qLMcYMR9/1t7/8ihRnfXO2O4CI0iMOY5P8k7fAbd+42X1meIDcTpUPr+1F7921ClQ6TOBHOL+oxdHtf/kzV1b45Mn6mQTT+2kz6vITqLza31Kf4YAQHJWk3BAx+yyZH54lsWB8K8wZl2015/dFMEgMSfTr4ZZR7XbFvZonELlZ/iuVqM/D/xvLNUvBhvPFU0jM+hdOCMi98YJ6QFduRv8KiuUEJy4l5Owvp2S4ZwIUWxzyMhBYrBOjCYG4ySu8oYWgRD3qHUuFlghh8/H4wyz/V6jyNMCV+bmgtY6S2lV6jjyK/LRAEDGXYyOBLr4Vn/3rjK0WTuRmSalearBonRn20qf1S7lPLiooLa1Oy8jEit1cAoiRD8HjoudqDrpmXSjXWfxhZHzteMTapq3qwexG2z7K2LmJWr3KnANI8kCuokyyfv4137+wZSwKdZQZe4WCO6wOsliS6ALPcej1T57RRiB7ZWHo50c7kfyE2ysZXeIf4iRgSIwoP7j3OLuyQfXfqDRViaXRM9uvKI/TO0EuMEVeUeDbadJEHeWwBnBYpJlpVvn4OGjUXWxn3bg1LHRJOnBGuL4rhF0+YXit09BN6/cCBoksiob2LYlJGx3VG9xQ0rIgRjPIHNcpBKFdj/j/AUkqD0voMcptqVY2KfV1K9+B0ZjaozvjaPHwWQ8gLqrmEEklDUbhhAWCEe3FCaPkmk05lGdt5DprLO+WvvkujoaECKG6GiNtgBKWJSaWI5Gl0AQPRXDOiANAvYFKjVugqNojeCVMglGQTIiTee8zen0JnyrKsifZP+a0ESIkQH0LmSFt9R0d37KG2B3+Wf5nBPZBpq0m874xtkOyF7h6SzOltlKcnq7ehPN+BFPUoOTo8z+nK69LDb4Ceeg+qXXrNui2qmhbcyuQY/NvbqCftNlLekD9wGlbmsYVs6VhOOdi/UgZMb1DNd5XQSMy/8KtXE/q7qreMNvQ0u5sFjnWBllpWAg2wGbvQvEF8U5gZ+SzN/68d+R1XJ4xqx6xD96s8fj3opi/S7vp5nzF90nkYmy+7BdGEGRGkpaWmffc+cnxUa21eXE0DuFoPfwuUg8uCj6WXXaEu3bJ3rliMKqn5MZ1hFx+u9uU9yxDZCbfvS7lwwIao17c47tdSu8iBSL9V8hU2R5UvWnhvdI7y6rxbw51YN5GGXhtfPkwYMsr3zkEUFA+XVJ24KMdq64+rpFobaPjMOFmXFNb4HG/zjgbaowiI3n9L+wBeT262ecWGoXqA/oJliMPCmA8sEeVNf/fUxb+660V5yYw6OmbAolqdny+PxnlowhX4nwiLXqmwsYTw7Df6PoYwmF/uoIgsS3Sj2ad/r2HDmJWFCDJvzRWOd85/cAiT5dqLEmm+dEJDx7yVM6vv5MFdxMw5FxOq0FG1tfqHoG0s0IgPT+Imb2WjBYxGphlA4K5DutanlC1ksSYfm9WdkmQXFi3ISZMk+j4lxeuL3kN8Sm0QZ5ajpwoh7eCOkyYaWSndJxQGdiyWE2DlTtpEdwPNqlunqgpDgwczrYhmrJ5FoWhpOcTsYo0Cc6jdTwddn99ptyi1cUdFSGipbdLYby8RiCzUL37zN/3U7Mp6GounwFoK2yk1sq9MUbegYN5nbRLSEmDntjuGQBBNkA2MlnWfuL73bLeTSTvkQ7uanQsClkCkIYwtujuzHsHuf2Q/EWqUia4q0T7JvUdxr+u7QiThu1lT/jCwrkMolF6LXuubmABMTS2YVzcAxNhHKr1kIwdJgMB5odj6/YT6ijJt3/ZzLUN+7MUijBcKL1D8Gpwgabmd21LAOAqyZoT8MCEz276hAvDDQhDNPXAUTL8agMf8Aj3Qdg3BkTxD1Rw52ZAuo562wY30jyK4NfxIUuCMwOOntiJAV3/11GcBzXdavWD1Fdtb6UUlgwrajfZbRIMBNovZNFcKGOaKfu2500VtZI+XgP7oOAN7F2foPmXB9C54nv5hFjEp1KYdKjks1qDVX7tIsq+WoWmJcfgsRSc1qOvx4fhBFFitiifbX5WTBPk70yx6Ur0vTGM85H/Fq0QlSMrZNLPQdkC1h8kXoBaoPYA9mgPwddDlggpDUVG7dneuSKKyre4TUWTWfL12N1Nhv6+1/tXmIXuUt3B7xPK3iO9aWAkbFTkH6n0yhW3e0O6tu2RHLlXniymN32Qs34znVQygAPXNhAWDdJOF0EseFrSu2S6X+gDg00wPv4Oml9TeetFTlgk1/K3tyNPumZKdSmi0JAvioVK2zgqP6m92hIXG1l4kOa+f4ZVPj4wBEKei8Ddc4z66dd4k7Wj+mk4R15MIdxEkk16DMMO1mzS1D8FiLfeact6VwlgjIh86LNmO5vJfItq/H4oaBIZJZEpxBRRMJHZI/RkZ5Rd5AVCDPFliM/wnH6U2h9i+B02AGxnI+clrkwxbPU6yvHfb6oo+l8oIR4EaJG1R7kAzZBw/5a6wNTTB8qCYns+KDyHYZGbeADsTqD98dGYj6ENZ7YCuPvU9FTLSZeZ3sYAsZDhVz/j93S+W08W5ukcWp6n4oEGlCIE06hCy0tCfIMw8WqtgiDFAQR/wxDPUcNVjvbE3WlEEOWeVZoZ24t81UtxhqBxbBlHrLCBk0a359Er6o/tnyDFAdsq7ZCyHSRTcgrNWmk5QYdafxcDbkxkFEjg888RDA3KApND51pp/pTrdnLVKhDZOd+ibpMS5XNOe5Wf31V/W/+grHfcC2n8oUjpxC3ZaMGTmEhM9UZXoKmoVGuGYgsfm3pIFXDarA5E9mp2ORj1Ap1xixdIT/ONeSz3E6z1wrlmwr41+meJYVcFC7S+vpbUVILbqDRHqdxUMlAwTB/BrEALZZrGjmt6+E+H55XFeSyGsxO8gZtAMBZAlX04mg4t/AsP2Cexdp/+r4lyvYSEoq/oQ/mqOt95YFVUAyUcPUMlxwBASu2pJzIg+rI1+5SK8FTPAapEJReV+ck587qYgAWdMBu1KfbELWtwUQwKeOHob5GTsLGaYPHa/BLgH0QpmjmrL513I01pQ9L7ks7se9zHRfmfLEp2obqFXdlahEFX6Ki6ys6+zQg7zlCSM4+CUIRY/DLXXz/SwT3pqnyU1BcAdWXXFQjw1EMmavG/9hsd68tv9B6AMcQEywoySsXZUGSdbB5woad3fPJu+APVCsOxzFCbTZS7Djl87q59igkY8t2dVuvaSYdHSqaAqkpNNI6OgfnyCoGuQewAlPwW77cyXi8YVwfbgF33dLpUIy9CXebtbC9BfFZKEqrjJUG7tnGgV/O9WZ154cLb0T5LJJyzv82o3JACYMR1iI/Qcu5xSBHXPTJbXsbu1hTilfl/XC02q0Yw2EdmDlHjIRJoM3tjlMQQ3kEQeqDCrHrS9gLdFM/kQj8Yy4ZrwhB/Qf1vmYzI+f9GSpG6ctCLJtn3LNypQJ3xy9IstAbTAqBxpiSLRbmbNpNyK6j1wU/pavmxpk9qx71p84lH1CldoXmoQhVkW3UuoH51/kZpE6idrhsi1/VHaYCp3ttwU8zeJT3NIvuPQiwKzmjysBC6qYpFYGe3AJr70Mi3wRz8Fi/aZJFcw1b6WdrqgyHxnoQEKWAgjzgWTINZKG6Lh/sBltmKsARoS5DSifh1z8BTIYCKUUNYYT0cuo9i5V1X+KlgtdKAHCQYfBkMkiLegLK0HuCV1r8y12gs+Z6lqaTz9iPtmuNUo43ibRgrsJbvehR+c5QA5zoRYR06tVXQfzX6//D5EqkRp3gvuDmSulUpUYP+ScY17ftQgyy59A/SEcuSqNvMb6dBSdsORDhzGdcdKMU2/I0rCvgWYc8heBBDZMEfW1ihjhyaqISxxHOug/DdTbIixxtSCcQkckEO5MNzxX1HKEREBGfRt1x818hfdXfxHYw1lpehxLaGNOagDi92/4433YD6Ls1xVadsI70cPyo6HeqON1G8tVtEBKP3lxExXx1YCXa2SAUJFVLOmsIiiTsgiknqN1IS/tPq6GkmmHwuBm2AF1lKoCq7B64UOfH/lNJpF8anBJFSN395GDkCsT5ACyfsdm6ujYDRZMeRsAqLdzGJ5ZE024SetG3HVCAyEJjco9hORkke6jY/+HbKiBGWF5GewrhStHWZLxGJzF9voiOSGQx90A0dVU2cH3cHjOBKB4vKGZ+M/8C7oy48FFqGRklGOqDBXGHq19WzZvxppk7PtO90TGnlDh4L9DRYRSf6p++5Eq9LGryA5UvWk+q0wuu/RmEnkkTUeSmAqi+oithiK1I4CJ6Nmykni8qv+wm6Ej/BlrFb+9tvtwwAHegR/ScNdLBYRPUVD7gnXoeDLIKB/Ep6nasbGsx/o3VTWNXWBZIgrigzinFKGWqDKfJfeZswaOZ1raGnpXmXUhnlca8Apox4r6T8VxbJDyX5NGcOaDmgjveq1ttTgMcu3N4vkQz9YEB4LMYKJactiBZ49B+OScAHS1Zycn4petzKmiB61OElLsdp4zUTS6axxdUfQdcJBNdIStLxiw8wOyp/BIux39Y2Eaz/iAzKGRYdC0/eEYHNC9a+SBbrAvwCmhJcWsZZd+51WfB598DiNL4yINOx8HQ9q4f3hu+mW5+vjnRx5PjwpRp9PyQYLbswicBOHc34bR3yTU/GLdJoVfsv9CZn5IGSo1fImzCoh2NzuzXzzVuU1EBd1NSKFBz26rUvoUorjTBtA2D6g+n3cI6+JsQshReBJg+gJ6UImZApBKpYHlT7DvUatKEb8ckRrv+Gi19pINDR+LNT7yLnRX/vRAU8ucjinGldkEH+NMwc/kM8a4AByXXOUFmMrplAwTbxeku97rv2KDa4XwjjC+JwOxU5Mc8JQjrzaHJnXdH7jPw5BqiXpiv6TT3hVru7DwH2lweYYC69ZQq7GohHcSMDeSGy+S60M/hRRrgH4WCiJyD14Je+8M3kDhlH9sjSFqjsBkArju5KXwCrepoT62xBvGk5hbhHBUxcSmkX7I3/Zz6Dp3tFujqwb/jd2KB5bZ6DjoPrM6BxUOPza/iDx/WN48dMOjSJclOyp/YCEiOTzrxn1f0hw1eenf12dAoU5Qf4r1iKd6CmxuJjWhTXXWbTPfmzRQ2ZrasYF665kZVPdgx+dYRGDJIyY2t5R7Tr1jYjS8TObfixgvMQgDqU9UHPYwoPqpfH/Vzgv+IoFNumLRyZgx+zUlNtIvLj/kZmCc3H81XjDw/7AU/5d/IVx0FBpEbfUwnGDr1ve3pmMuSHgA6rahNOx8SwUXqyToGg73GDi9wBufWI3ihc2sGZ20rqNA/tk9IxwLsp7y0xmzthSTEGFrzHHxBaA3jEZ/7UO85OAWYx0sickvCEpTQBkMh4UOCpeqWJ9r3Og0XR6fYm3q7t75zCzqDV8vu03lYnVYR/4Iy8VJtdFTHz+XHIvi89BZESkLkwnqujThRiiu+W63G5U6AQhQEj8ZROJYU8V6Ops7IvGL0/+Zrrr/cV4JTM91VhjPK+/xSnApvzXwEJPsMkuQlm+bbTPpoaCv5AJc+59XDGW6lCwPslR+mC99CTN9VWdSyLinc69q7+XxQ05StPDG2xzGgCGKf9oXFwEz/wASdciXp2GuJ3wL6BG080cy4v7qmEsmVSiLqRczX540jcKRDT2fk+5YTtDbOo7rqOTUKGDz4+YMKFeaZYH9m7zRdDN3PQlNqR5e19tghVlSF6zIrhG1uNsCKC8bILdw+CDjZcS7Lgj9R1CJmscJhL/RohLsnF5IjijZEW1a9wq6ftgReffQZ6UcpC3oCxDFECpd6/6qgcOTlRYd0AmjFB0ywo8Db1PETxxMZNVLuGTJ/KH36cRAQwypmq4EJetpoDNhpLf18MS1GXdF1NEseXwuex5HxRcV61OAXpy6L2ybKtIB6OMJ1rd5j0tzPesKlP24rQ7Ccjqbi73ejFtgCxrjPBu8tlqLato7LeDELBkiqXpdiys92vqpPwSJaxwwRIXNHjxp3vt/oEy2+LUTT4DgC02MhbwphCj53dG8FQyD5nkfneTe880t1pLso+21PRBGGOHrwvNcrGO/SGJ8lAIn2gV6hGdJEL/VLFgvdh+TiNaTR4putnNsmQ/iJQ/Lf7ExbkSNH18KfDU+7mH/kb8JGnuHGwFL5f9O3Xc5Yfhq4QVpdvskg1L+wt3p4RTpM7E/UQipxVQEtCX2l8rUgeEJGuEmb3T7ciULaVPTwuYHr8e4B2rvdiuhLl43Uo4jlbKqEkKKRAf0fEeFR2bm2gj3IvriPdu9UEycudEuaM2WUf1UgIkf/JwJFUKJiG096dWdCA1fzruzLtT+S9fZPMLX5wSMWtIFlWNqPP+Sn01BOXTQLI9JEOLX7UI/ddLMmKRF0ggg9kYdBjIyXJLMi17Z8nxc5O7G6w/c9Oo6nQQ2TiDoR0tgb4aCTMDlnHb6z3LCrDOh+VPJCgafe29si0xQUX3OIaTB3Mr0+5wveE4rO/YaIxagdpYbmX34+EE2XAS31rVt7SRi4X7+NucrQVu6/cAqs51GCxjMGPSJNZRZphqjB13nz/PvDDIPbOtQmnDSNXYDk7NTBe9Mr+OVjhEStIcBzJP7vKRevcblIA1E8nBlGOFFZ0ZLdQkkVYiBiAdad/og9e96zyEZ9MHLLjgvQvsQdS88SKnLMuRrN7hLoI/2i1UoD/MqIM4gqznAdAnr+KRNkFOXM7v3UY0HDwQ7YAfwjKEG8ZOIylKkux1drJrmliJeX2ilwx/PyQ81RvZttAAbh65kJ+8NZNA1o3Qaoe2KsN/Ku+HXLY2IDRYDdmJYUgxlS5tEBaIXdPLJYRK8miALmoRCPO5yQVlfO7uePBrmZIJ/JnNT+JixMQmiuPcDNoe9IOEcTDwQohl9d+s2T6uuP2It5jEtjHa2nSaco2HfsaIhbfPB4Fq5iPvCOBTarw7HC9UVX/EZttorFt1AFlS/612Z3kKbNN2B3n3emXUum96SX12h9lW2D0f/xTfUIQpgoXr6ISdIx/zA3K6w9D1yYjjekJ3x+NkhJ2Vyv8Ws0Mi0MmFHtCKRnXEtNU9FWQ2XsX8DSt826+BTttjnG7WJgXXHXWKCH6oyTMoHCTLqhakn3uWsd5UvGuwNjfZqB9cItVKidNnq8uOu7j3/eEOiOATFeUsoIcAs62BAiAEOi5FUwOeB6cAR6Nt0Qvw0qzWCUngX7rfReXf8rSf0V2doJrdcc7/obuLaJdBVgfiVgVlVeNUbskFa7dh6r8pkRW088rHUTvKioDZ2w5CYOa9zdGdWRq5USP4hNOSIasVGIdzD0KXvoaS6QXk3Zvvar4CotY/XDLBwTkW0Gy5PF7JwRKxFmD3TePz2cTbG8oOsGsP/fQs8yIC5Ddw+nm9dwdRk61dDjch/oFyEZ0xiMX0GXh+gP7HvPkfHpfNApktepJ7s0C7DEtQtmHpDWf2x0c8gkkF2fKe625/k06kW6olgQ4kr65l9KL1Amxpczubl+z+8mG/PUlByyRMuSZtcWfl8bw4Ewb4CwGhOMAKg8bcpn+vyknWAnga2f90dgkS4N/FRbr5EYjS/BVWUkaKQpAnJ5h/XSmImb+2BGSOYgM7dqTWi6Lgjmg5uRsUsMo/0rxt9D4qPJ+ctoAQmhXh5I/uCeoTHuXemxLzv7R1SoRr3QOl+dQ6ZbvfZWeejjv6JrXBeWYzY78Q7Gc11hEWekrZnHYaB98QlqHvjPVGvkQLHUrWFMrfioIPGrIHpwaMjotWieCarCzyBuwA4gUPiB0EOimRvYc/fz15CmeeNXAI02312GR/9hsWZ+eIs7eFMBZtP/YJzb/R/2lHfKjOzegK5roJrC6Gl+vAAoXEk5O28Boi/mB01HVKY939InliVqGDlfIeS+w+c4dJ4bEcWxNhQwQCW4BPsvGzoji2PhMaMDpTO0A8geuFZ90tqCorSe7EMCEfs33Pk1KSDggN6FQbbhfUzgXWaTNX83X0YEAA",
		// },
	],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

// data layer is state
function reducer(state, action) {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "ADD_TO_BASKET":
			// Logic for adding to basket
			return { ...state, basket: [...state.basket, action.item] };
		case "REMOVE_FROM_BASKET":
			// Logic for removing from basket

			// we cloned the old basket
			let newBasket = [...state.basket];

			// we check to see if product exists,grab the index of it by going through all the items of the basket and then seeing whether basketItem.id === action.id , if we get -1 means no item matched else item with that id is there
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			if (index >= 0) {
				// item exits in basket , remove it by splicing from the last.
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in basket`
				);
			}
			// return the new state which carries the old state and the new basket
			return { ...state, basket: newBasket };
		default:
			return state;
	}
}

export default reducer;
