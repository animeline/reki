from discord.ext import commands

from bot import Reki

class Information(commands.Cog):
  def __init__(self, reki: Reki):
    self.reki = reki
    
  @commands.command(name='ping', aliases=['latency'])
  async def _ping(self, ctx):
    await ctx.send('Pong!')
        

def setup(reki: Reki):
  reki.add_cog(Information(reki))