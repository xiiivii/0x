import { WeatherCondition } from '../../types/Weather';

const labels: Record<WeatherCondition, string> = {
  [WeatherCondition.Clear]: 'Clear',
  [WeatherCondition.PartlyCloudy]: 'Partly Cloudy',
  [WeatherCondition.Cloudy]: 'Cloudy',
  [WeatherCondition.Fog]: 'Fog',
  [WeatherCondition.Drizzle]: 'Drizzle',
  [WeatherCondition.Rain]: 'Rain',
  [WeatherCondition.FreezingRain]: 'Freezing Rain',
  [WeatherCondition.Snow]: 'Snow',
  [WeatherCondition.RainShowers]: 'Rain Showers',
  [WeatherCondition.SnowShowers]: 'Snow Showers',
  [WeatherCondition.Thunderstorm]: 'Thunderstorm',
};

type Icon = { url: string; alt: string; width: number; height: number };

/**
 * Note:
 * I've inlined images to base64 not to make requests to Apple servers.
 * PNG-images are used because icons you provide in the task are not enough.
 */
const icons: Record<WeatherCondition, Icon> = {
  [WeatherCondition.Clear]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing clear or mostly clear',
    width: 96,
    height: 90,
  },
  [WeatherCondition.PartlyCloudy]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing partly cloudy',
    width: 108,
    height: 90,
  },
  [WeatherCondition.Cloudy]: {
    url:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABaCAYAAABHeVPzAAAAAXNSR0IArs4c6QAABIlJREFUeF7tnEFW2zAQhiVvgB29QTlBYWfBouQEhROUnKBwgpYTQE/Q9ASlJwhdEHkHnIDcoOzsTTx906fwkpBg2R575GT8Hg/ew9HI/6eRRqNxtJKLVQHNal2MKwHAPAgEgABgVoDZvHiAAGBWgNm8eIAAYFaA2bx4gABgVoDZvHiAAPBXwFr7XimFP/+vLMseer3es38L4d0ZpAcMh8Pdra2t4yiKPgLAvlLq+C3ptNbPAPCglPqDvw8PD2/Ck3p5j4ICYK0901p/AoATAgEHAPA7dBjsAHC0b29vn2utvwDALoHwi02MlVKXxphBA23XbpIVgBvxVw0JPyeO1voBAC6MMbe1VSNsgAWAW0x/FM3thM/50pTW+jpN08tQFu/WAVhrj7XWv9oY9asAojdMJpP+0dERLtysV6sAcMpRSuHIZ78wcppMJj1uCK0BsNai8AggmAsh5Hne54yUWgGQJAkutOfBKD/TEW5PaBxASNPOG2sC23TUKIC7u7v9KIruQxz5i33ChTlN017b0VFjANwGC8V/yd2EDgJD1DiOL9rsZ2MAQp73CwTutblZawRAl6aeZVNRHMcHbXlBIwCstUOOXS6haP22ckfkAHCnq5RCAJ2+ZlLcyv39qJS6pT6DIAeQJAmmGSjSySEDxITezyzLbupGTaQAXJLtKWTlKPvmPOMmy7KLqiBIAYxGI8zrX1E+ZBfaciC+G2O+le0vKYAkSe7dEWLZfqzF/VWyrGQA3Mbr71ooWeMhyib4yACsS/RTQ/vFj3qFspQAcP77SvgA69BUIQRKAMHl+7kJ+qS6KQF0fffbFK9xlmUHq8LUWgBcAdVZFEWfNzn68SCHZTFLQ9RKAFqo5fF4ps7dsmeMwRqluas0ABft4HzfmTx/CKhWnTWUAtCF48UQxF7WB1yQ4zh+V9kDRPz6aAHgdLECw8sDRqPRCRZT1e/CxrcwMMb0Z1UoBIAZTq015niaKJzdKCKYK1o8bSsEsCH5/dYGgjFmTvM3AUh+h55LnucHs+WQRQAkvUDPYK7qYiUASS/TK+9a9AMgkQ8zAGutpJebYeDnAWtQ29OMfDVb9V6EBUBNpVd83DsMFQD0AEptxAQAPQCllH8qQgDQAyiVjJMUBC2A0uloCUNpAbi39V8dS67cCXe5xp9cupoN4uhP03Rv2cF8US4IC23l6LEmgFWjH5stAiC74friVy9LwYTczs7OkxzGVKewuPMtfSa8qSXn1SWf+yRNaaKEpJVwFIpfuAZMzbqpaCjVb94gvMT3BoA3CgQv8cd5np+W+QaWwkP5RbMdfgHbS8EaNw2qvCtWGgB2UMoT5zDhG5NYfFvpq9AqAZiax2NLVxm97q+lzimOO1vMbAIAvpj3quC2jBfVAjBryHkFfh3Zh+m+QWu93/E9BIo7FXgMAI8AcFtmji+CQQagyJD8f7kCAoB5ZAgAAcCsALN58QABwKwAs3nxAAHArACzefEAAcCsALN58QABwKwAs3nxAAHArACzefEAAcCsALN58QABwKwAs3nxAAHArACz+X+U3/FqQJmbugAAAABJRU5ErkJggg==',
    alt: 'An icon symbolizing cloudy',
    width: 96,
    height: 90,
  },
  [WeatherCondition.Fog]: {
    url:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABaCAYAAABHeVPzAAAAAXNSR0IArs4c6QAABOxJREFUeF7tnM1RGzEUxyVzgRvpADqA28ocgisIVEBcQXAFhApwKgAqgFRgcsDyjaQC6CDc1icp8xg54wTvaiU9rfbj7UwmM4k+1v+f3tPqPUmc0ZNUAZ60d+qcEYDEg4AAEIByBaSUe4yxPa31Aed8d0PpB/g3IcTb3217GmcBs9lsd3t7+4Rz/okxdqy13iT6Rp055z8ZYw9KqR/D4fC+DTAaA0BKecwYO2OMfUYS7oUxdrtcLqej0egVqU30ZpIDMMJfwGhH/3WMMc75q9b6W1NBJANgXM0V4ogv5QcglFLjprmmJADMqL+GyTXGqLe0ebNcLidNcUu1A5BSgo8H8ZM9MFnneT5qAoRaAUgpQXisSTYIYFMg1AagSeKvyDUBQi0A5vP5OeccJtzGPQAhy7LDVC8WHcB8PodF1V2qH1ix3xshxLhiWdRiUQFAGIFz/uSymkX9dQ6Naa1PU3yixgYwi7XActC2UlFYJ+R5vl/3l1E0AC1xPf/Dqd0VRQMgpXxOtNCqNOJLCu0LISCOVMsTBUATFlsI6gGEtz9a61/wtRQj5B0LQFtHvzWepLWGMPctFgx0AI+PjweDweAJYQQ2ugmwCKXUZeiXEzqAxWJxpbU+b7R6uC8Hmbix77yBDqDFk683FpNzmAghblwbQQVg8rfg//v6OH/GogJo6bc/9mBxgoAKQEr5lTEG6cVeP5zzaZZlkyoioAJYLBZ3WuuTKh13vUzV2BIaAON+IOScIs3YOJ5VY0tBAExiHWL9X9oQ8UxAyTofeAOAET8YDK5JeCvW0tiSF4AeLrasKhcVsE3IzgCamNv1VqeGijAXZFn2oRCQyzuQ+C5q/VN2VBS8q2wBHQkxeysYWPFSCAFrpHdPJQDwtbOzs/NME64fBs75fZZlp94AyPX4Cb9W60EIMfICQAG2YPGhgRchxL4XgCZvqkKRpqZGhBAb3b11DpBStmZrSU1aenUTAkB79UiV/ipQtv2x1AL6kt+tYaz4TcLmIAW4IHrCFCgMypVaAAEIU31VW2s9GQ6HU+evIAKAA0ApdXh0dARHaN1WwgQABUDhGgBaL3VBJuHyG+U1+ttIYRzICgAK9HGfD/JYCUvIUBzIH4ctGVPJAmivjx8A1KQ8uSF3CKjbUigZ4wzAuhti1aI1GLcqSEG5yhAKww7O64D1CpQVswPwOfhd2QKgewjObW1tzSg1uRFGZbezXtsJwBoE2JB1YB8T3S8Reg2OMwCQ1Liji56dhHkfx+F8muf5ZcjZYi8AqzcxLglA9GlH9NtVaIwxcDnBx1mDAKxArC7aY4x9NLujo1w/lsKhmYsA346qKqXui6Kavu+GAsC3c6pniYaSQPEVIAuIr3FpDwSAACRWIHH3ZAEEILECibsnC+g6AHOeDFbKrTy+CrEeuJE9z/NxSMihiHNUC+jYzmqvaKfNwKIC6FhC3ynRYhN+9f9RAXTJAsqOGVUVe1O5qACgQ5gD4L7oNidxQPxWzgEhI6MvdaNbQF+E9P2dBMBXOaR6BABJSN9mCICvckj1CACSkL7NEABf5ZDqRQdgLnY6a/M6QGv9veiMVyiHqAC6tLW9yl5/HxhRAVAsyI4kNoDO3CPayliQ2cIIm3nbvo/0RSl1ir0pC+wjqgXYDZBKEIDEY4AAEIDECiTuniyAACRWIHH3fwC3gvZqCaXRQQAAAABJRU5ErkJggg==',
    alt: 'An icon symbolizing fog',
    width: 96,
    height: 90,
  },
  [WeatherCondition.Drizzle]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing drizzle or freezing drizzle',
    width: 96,
    height: 90,
  },
  [WeatherCondition.Rain]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing rain',
    width: 96,
    height: 90,
  },
  [WeatherCondition.FreezingRain]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing freezing rain or sleet',
    width: 96,
    height: 90,
  },
  [WeatherCondition.Snow]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing snow',
    width: 96,
    height: 90,
  },
  [WeatherCondition.RainShowers]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing heavy rain',
    width: 96,
    height: 90,
  },
  [WeatherCondition.SnowShowers]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing heavy snow or blizzard',
    width: 96,
    height: 90,
  },
  [WeatherCondition.Thunderstorm]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing thunderstorm',
    width: 96,
    height: 90,
  },
};

const nightIcons: Record<WeatherCondition, Icon | null> = {
  [WeatherCondition.Clear]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing nighttime clear',
    width: 96,
    height: 90,
  },
  [WeatherCondition.PartlyCloudy]: {
    url:
      'data:image/png;base64,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',
    alt: 'An icon symbolizing nighttime partly cloudy',
    width: 96,
    height: 90,
  },
  [WeatherCondition.Drizzle]: {
    url:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABaCAYAAABHeVPzAAAAAXNSR0IArs4c6QAACPJJREFUeF7tXU1S20gU7idnBrKDqpCq2cEJAguIlCwGHwCBT5BwgsAJEk4AOUGYExiLyhpnEaTAAuYE8aymKk5V2FlJWeqpJ1qMZbWs7pba/1pkEfef3tev33vfe2qAzJ+RSgBGOvuYTH5xcbG0uLi4BwC7hJBtSukSLg0AbimlNcuyWrqWOtMAMMEfAMCbWOgcQR9ZlvVuDkDJEri8vNwzDOPDAMHHM84BKFP2bNcfE0Jei4yLR9CLFy/ORNqqtJmpIwiF//jx4wtK6bqIsADgzjTNZZG2qm1mBgBZ4TMjfGKa5qGqcEX6zQQAKsJnwlvT6QFFIIugNOltPM+rU0r3ZN4DXVDTNDdk+qi0nXoALi8v0c1Eoyv7aPV+4sVMNQCu664CwI2Aq8kDp2pZVlMWNdn20w7AB1F3s19wlmUNRTZDmUR2V5TRHnc/IeSr6lhzAFQlx/q5rqu8+3GIqQXg/PwcyS4MhJ4RQnCX4rON/1BKbzH4IYTcUUr/NgzjttvtNmu1Gv6f8MOi3R/CHTgNpwoAJvRXhBB0BSOmUfJBKqBh2/apSD/XdZFmQA1QfnzfX65Wq1LAq0ym1QY4jvOaUvoGAIRCf4EXQM14H4bhySCtUPH7OXNPrhf08ePH9SAI0PeOjhYNTwsADnd2drgkWRkAAIB2GgLlUroGOI5zQAhRCXxUcDoNguCwXxsKUA+9a2hZlrWmsiiZPqUBUK/XlyqVijDNK7PIQW3RcIdhWOWBsLi4eNNj6FWm3LcsS8juqAxemgag8A3DuCjxrJd6nywQPn/+vG4YBoKg+rR839/QaYwLa8CohR9LNguEAlxQPPSpZVn7qgjm9SsMgOM4hQKevAXK/I4g7O7uphhM13XRGUBe6BmLQWSdA20gFAJgyAZXFIsT27YHJlHiKghCCMYmQmAAwFmn09kvchzhvAsLC9sAsOT7/hmOpQwAczWLnK+iApVuBwDVnZ0dISaTcUZvRUg7jNIxDvF9/0QGiHgOANjrYWablmVVlQFwHOdCdPdIS7B4h5Zt21IuJDPYwrELakQYhp8wccOjrfHYw+POMIxXWTlopDuUADg/P0ck68XlpHWEU0rpPwCAQVur2+3einBKJRhtmZdS04Ax3/2DBIAVbk0AaGRF0dgZtaFSqWD1hApvJQyAkgYwYg2Pn0l/EIyjLIKPZdMwl1wWj5WQV1zyIn0EjZPbWdIOwCNqn2e0GaXxVYcmoA0xTbOmAgDy7FpVsyTByg7DdV81HkcRzSEFwDi7nrLSzmjfDIKg1m+sy8gv9M6Hx0+n01mTjgPGNPAqSfYPwzRt2672D1oGxd0z5kPJi5QGOI6DfjLSzdP+nNq2neB/iib5Y4H17n78P2EAxoV0GxbyAFDrd1U9zzumlBbagP3V1rkA1Ov11UqlgqG6aj53WDIre567IAjWeu1BCVqQIvUGAtBoNN7h1yNT6vXkAkYpPdrd3U18HaNqC7JqTbkAsOwWUg1CTGHum0xugxSnpOIRofA7nU6VR+ClAJi1sz5vb/TbAoWao6bv+7Us9jQFwBRGunkyzvs9FaB5nocFvyIURW6FdQKACWE58wRW6u+8LJtA2WMzDMPDly9f3uYtJgGA4zhYzBqXC+b1nZnfbdtOyMl1XTTM6BkmHvZd8XuZSoqHgbGKrWg537QiEgTBcp872isrJPPOgiD4S2THp0CL/6PRaNyMqqxk3IHrT3GyeGDV9/1bmdQk7z0jDWBuZ6Fq4nEXYpH1yeSYZeeJAJiiJIvs+wu1ZxGxlvsiIgBmhOUUEjavUb8RVh6I0zECgFEOKate5kQTPJZ0hYXMu84ByJfWmW3btfxmai3mAOTL7dC27ZP8ZmotYiM8CXU+am9YsJdOA4xLiwCYgVyvKgxaj58HAJgnNKch+mDS6f/HU/VSEbOS7xXVBu27P6EBLPWo/GW56FtNSLtUOlLXuvvZ0LkW3N+WKFzeXhSYBADzbFgkzn3RD8KLCj9xBMWDMY8Ii2+nsfwwT2ZDFT4XgB63FJPys5KcySzQzUOs6O+ZZSmMosYP8KSu+iq6oBH0PwmC4Ejk4w0da8stzGJUNdYGTRMQeAkHZrFQ8FpoZlGwcgGIB2JuKoLwJ6UUP/kUqQoQXccw2uFHe3gdzqdBX8cMYyG9cwgDMOyFzcp8cwBGjPQcgDkAI5bAiKefa8CkA2C6/66G5FF0FbxBuqee9YdWt2795sfSbz+7b4GQVUpp49p6qvU+H934FNKASPjwCO+LeKAtqEE3rree5tZEqr7YltfG+f53gSk5urJWtP2FC9V1ivYrBMBz7/sHSmjyDyFoFMiW235HIFmTSQlpXpsrqY/qRAUw6nbKAJhuezsEkv5iXhMAePT8/rOL+YoESTizAGx67QvgfEFj0O6aDjvA1baIToTa1fMn2v7EiG4NUdKATffbawBIXYxKCTm5NldK/4sTm1ff1iGE1N1Ek777M+noQajfHwXBDSG0n6q++7XwaO12Y7n022aztE23wde9+5UA4BlCNtDhF3Ol9AKmrS/f9wjnbiIgcPrFfKLtMr1hCF8aAOZ2chL30Loyn0jdUCXygqPQNpF1ldlGygZkGUKDkqpnrQjd0Saz+Ode+4DybuHV5GnJrK2stlIAbHlt3lU1Z1fmilDxajJqJs080Phnv7i2RRrkdw8IELyuciyjZlkAME+cyIyJup08Pz5Pc3j2Jq9P786chKhZCoB7d9CoMw8Ir3A8FOViNr32MaRvWhmoPQjaws/gmEXbd4SS96K0A99VFteeso6YvHGkAMgbLOv3LOOty5PJipoxJXllrmj/22AychoKANlRsx7jneUqU0r3RTVWRohF2moHIIsz0rX7s13l8dv90nGACtJb3vevw4yat7x2ylGIchWaXGUVmfT20aoBw/bjh61tRYWvVQOyDaE+TyTldt5L6M6g3Q0dDO1YA5Dhdmqjj7MYWjLmUbO2I4jn+eikj/meD7R+LVQ2dDC0Zex+rUcQjzfSSR/z7M04up39wGnTAFa9UGdZM6moWXV39R57upJDqmvL6vcfk6xkLKr0aPYAAAAASUVORK5CYII=',
    alt: 'An icon symbolizing nighttime drizzle',
    width: 96,
    height: 90,
  },
  [WeatherCondition.Cloudy]: null,
  [WeatherCondition.Fog]: null,
  [WeatherCondition.Rain]: null,
  [WeatherCondition.FreezingRain]: null,
  [WeatherCondition.Snow]: null,
  [WeatherCondition.RainShowers]: null,
  [WeatherCondition.SnowShowers]: null,
  [WeatherCondition.Thunderstorm]: null,
};

export const getLabel = (value: WeatherCondition) => {
  return labels[value];
};

export const getIcon = (value: WeatherCondition) => {
  return icons[value];
};

export const getNightIcon = (value: WeatherCondition) => {
  return nightIcons[value] || getIcon(value);
};
